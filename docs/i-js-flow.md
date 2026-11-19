# `src/game/i.js` flow

`i.js` is the port of the main game screen (`i extends p` / `Screen`), the largest
class in the project (~8k lines). This document describes its structure and the path
of a frame: input → update → render. It serves as a map; line numbers are approximate
and may shift.

Java reference: `src/game/i.java` (read-only, source of truth). The JS combines several
inner classes into a single file, which is why names are repeated (`i`, `j`, `a`, `e`, ...).

---

## 1. Module structure

- Imports (`i.js:1-5`):
  - `Screen` (`p.js`), `Random` (`j2me/Random.js`), resources (`resources/c.js`),
    audio/helpers (`n.js`), and the runtime hub (`m.js`).
- Data tables copied from `h.java` (`i.js:21-104`): `hDayBounds`, `hNightBounds`,
  `hDirB..hDirI` (tile neighborhoods for `renderSpriteOffset`), `hGroundProb`, terrain
  prefabs `hPrefabs`, and `hColorThresholds`.
- Module-level "loose" field declarations (`i.js:12-17`): the port retained Java-style
  references (`A`, `B`, ...), which are declared here to avoid `ReferenceError`. They
  are not actual state.
- Structured diagnostics (`i.js:105-317`): `diagnostico()`, `DIAG_META` y `DIAG_VISTOS`.
  Cada método emite **una** línea en consola la primera vez que se ejecuta, con
  nombre generalizado en español y comparación `esperado` vs `actual` tomada de los
  bytecode comentados y de las constantes del port. No se dibuja nada en el canvas.
- Class `i` (`i.js:421`) and the "level-1 store" at the end (`i.js:8026-8036`), which
  copies static methods to the prototype so `this.method(...)` resolves.

Key convention: ported helpers live as **static methods** and are invoked with
`i.method.call(this, ...)`. Do not convert them to instance methods (that breaks the
mapping to Java).

---

## 2. Lifecycle

### Construction / reset — `resetGameState()` (`i.js:427-522`)

Initializes all game state. Relevant points:

- Tile buffers: `this.u`, `this.v`, `this.d`, `this.e`, `this.eArr`.
- Horizon "tuft" buffers: `tuftX`, `tuftY`, `tuftFlag`, `tuftCount`, `tuftEnabled`
  (`i.js:434-442`). See §7.
- Actual random generator: `this.a = new Random(Date.now())` (`i.js:477`). It is the
  third argument to `randomBetween`.
- Layout constants: `this.H = 76` (horizon, `i.java:579`) and `this.skyBand = 169 - H`
  (`i.js:518`).
- Clock/state: `this.i` (game time), `this.h` (facing), `this.d/this.e` (player tile),
  `this.C` (mode/state), `this.m`, `this.I`, etc.

### Screen entry — `screenEntered()` (`i.js:599`)

Base-class hook; in this port it is practically empty (actual startup happens in `m.js`).

### Keyboard input — `keyPressed(code)` (`i.js:804-849`)

Clears `this.bCam[0..8]` to `false` and maps the J2ME code to exactly one
movement/action slot set to `true`. `updateEntities()` consumes a slot only when
it is `=== true` (Java used `byte[]` with `0`/`1` and `!= 0`); it must not test
`!== null`, because `false !== null` previously activated all nine branches at
once and froze the frame.

| code  | action                       |
|------:|------------------------------|
| 5     | pause/menu (`postEvent(20)`) |
| 1,12  | `bCam[0]`                    |
| 2,18  | `bCam[1]`                    |
| 3,14  | `bCam[2]`                    |
| 4,16  | `bCam[3]`                    |
| 7,15  | `bCam[4]`                    |
| 17    | `bCam[5]`                    |
| 19    | `bCam[6]`                    |
| 11    | `bCam[7]`                    |
| 13    | `bCam[8]`                    |

### Update — `update(dt)` (`i.js:562-597`)

1. `updateAmbientParticles(dt)` (`i.js:1050`) — weather/ambient particles.
2. `updatePlacementState(dt)` (`i.js:1042`) — placement/building state.
3. `updateEntities()` — entity AI/movement. On a completed step, and only then,
   it calls `advanceClock(1)` at the Java `j(1)` site (`i.java:1178`).
4. `__WM_DEBUG_AUTOMOVE` forces `bCam[0]` for testing.

There is no clock loop in `update(dt)` any more: the previous `dt` accumulator
advanced the hour every 16/800 ms and could open the `i=6`/`i=18` dialog without
player input, leaving the game waiting for a dialog close. `advanceTimers(dt)`
(`i.advanceTimers`, currently unwired) is a separate gameplay timer accumulator
(autosave, events, objectives).

---

## 3. Rendering: frame flow

```
paintScreen(g)                         i.js:524
 └─ g.setClip / fill black
 └─ i._paintEntry.call(this, g)        i.js:2484
     └─ i._renderAll.call(this, g, true)   i.js:2489
         ├─ (debug) tuftCount = 0           [__WM_DEBUG_TUFTS only]
         ├─ _renderTerrain(g)           i.js:3412  → _renderTerrainInner  i.js:3416
         ├─ _renderOverlay(g)           i.js:3409  (stub)
         ├─ _renderEntities(1, g)       i.js:3340
         ├─ _renderEntities(0, g)
         ├─ _renderEntities(2, g)
         └─ _renderMinimap(g)           i.js:4120
```

### 3.1 Terrain / sky — `_renderTerrainInner` (`i.js:3416`)

Port of `i.java` `d(Graphics)`. It selects the scene "type" (`b1`) based on `this.i`,
calculates day/night colors, and paints two gradient bands with `_drawTileGradient`
(`i.js:6728`):

- upper band: `_drawTileGradient(j=H*70/100, 0, j, ...)` (`i.js:3461`)
- lower band: `_drawTileGradient(H-j, j, H, ...)` (`i.js:3477`)

It also draws the "compass"/star dots at night (`i.js:3480+`).
`_fillTerrainBg` (`i.js:3321`) fills the background with sprite 269.

### 3.2 Entities — `_renderEntitiesInner` (`i.js:3346`)

Port of the 5-column (A) + 3-column (B) loop from `i.java:3985-4045`. For each column,
it calculates the visible tile `(b2,b3)` from `this.d/e + hDayBounds[this.h]` and dispatches
according to `paramInt`:

- `paramInt 1/0`: `_drawEntityClip(...)` (`i.js:3614`)
- `paramInt 2`: `_drawEntityMask(...)` (`i.js:3656`)

Finally, it calls `_drawTerrainColumn(...)` (`i.js:3810`), which draws the horizon's
terrain/prefab column.

### 3.3 Entity clipping and gradient — `_drawEntityClip` (`i.js:3614`)

Determines whether an entity crosses the horizon line (`H + skyBand`) and splits drawing
into two passes. Each pass calls `renderCell20(...)` (`i.js:6903`), which adjusts the
coordinates based on day/night (`hDayBounds`/`hNightBounds` via `facingFromTileBits`) and
delegates to `renderTileColumn16(...)` (`i.js:6922`).

`renderTileColumn16` is the port of the 16-argument Java method `i.java:7289`: it traverses
the band scanline by scanline, interpolating the color between `paramInt4` and `paramInt5`
and drawing with `setColor`/`drawLine` (not sprites). `_drawTileGradient` (`i.js:6728`) is
a **second port** of the same Java method, used for terrain; they are currently duplicated
and differ in details.

### 3.4 Entity mask / object / overlay

- `_drawEntityMask` (`i.js:3656`): clip + object + animation (if `paramInt4 === 66`) + overlay.
- `_drawEntityObject` (`i.js:3673`): entity shadow/object (switch 66/20/7).
- `_playEntityAnim` (`i.js:3735`): special entity animation.
- `_drawEntityOverlay` (`i.js:3699`) and `_drawEntityHouse` (`i.js:4097`): extra layers.

### 3.5 Minimap and UI

- `_renderMinimap` (`i.js:4120`) → `_renderMinimapInner` (`i.js:4126`).
- `_renderUIBar` (`i.js:4674`), `_renderActionIcons` (`i.js:4987`), `_renderInventory`
  (`i.js:5035`), `_drawCompassMark` (`i.js:4767`), `_drawNumber` (`i.js:4780`).
- `_renderFullMinimap` (`i.js:4807`) for the full map view.

---

## 4. Tiles, collisions, and world

- `readTileBits(x, y, mask, shift)` (`i.js:1599`): read a tile using a mask.
- `tileFieldBits` (`i.js:2387`): wrapper for `readTileBits`.
- `isWalkable(x, y)` (`i.js:2472`), `isTileBlocked` (`i.js:7531`), `canPlaceEntity`
  (`i.js:2453`), `isInTileSet` (`i.js:7557`).
- `loadTileData` (`i.js:637`), `loadWorldData` (`i.js:791`), `loadCollisionMap` (`i.js:7282`).
- `placeEntity` (`i.js:613`), `canPlaceEntity`, `stepEntity` (`i.js:2442`),
  `wanderEntity` (`i.js:2400`), `faceEntityTowards` (`i.js:2409`).
- Tile actions: `handleTileAction` (`i.js:1081`), `harvestTile` (`i.js:1580`),
  `handleTileField` (`i.js:7456`).

---

## 5. Inventory, health, loot, and saving

- Inventory: `addItemToInventory` (`i.js:2051`), `removeItemFromInventory` (`i.js:2134`),
  `selectItemSlot` (`i.js:1723`), `isConsumablesFull` (`i.js:1965`).
- Health/energy: `_calcHealth` (`i.js:2143`), `gainEnergy` (`i.js:1594`).
- Loot: `grantRandomLoot` (`i.js:1902`), `updatePickups` (`i.js:1990`).
- Persistence: `writeSaveRecord` (`i.js:5290`), `calcScore` (`i.js:5244`), helpers
  `writeInt`/`readInt32BE`/etc. (`i.js:5215-5288`). Uses `RecordStore` via `m.js`.
- Portal/effects: `registerPortalEffect` (`i.js:1655`), `tickPortalEffects` (`i.js:1674`).

---

## 6. Randomness

- `this.a` is a J2ME `Random` (`src/j2me/Random.js`), bit-exact with `java.util.Random`.
- `randomBetween(lo, hi, rng)` (`i.js:2479`) uses `rng.nextInt() >>> 1`.
- Note: `randomInt` (`i.js:607`) still uses `Math.random()`, not `Random`; this is a
  known divergence from the original.

---

## 7. Horizon tufts

The "tuft" scatter block (`i.java:7405-7441`) was ported to `renderTileColumn16`.
The old `__WM_DEBUG_TUFTS` toggle (forced scatter + `fillRect` points + periodic
console count) was removed: nothing is drawn on the canvas for diagnostics.
The Java behaviour is unchanged: `i7` is a scanline count, `i7 === 66` never
occurs, and `u/v/e` are only written and reset, so `tuftCount` remains 0.

---

## 8. Diagnostics and toggles

Every method of `i.js` calls `diagnostico()` once on its first execution. The
console line carries a generalised Spanish name (e.g. `Renderizando césped y
franjas de cielo`), the `esperado` value from the commented bytecode and the
`actual` runtime value, with `OK` / `DIFIERE` / `SIN REFERENCIA`. Predicates such
as `isDaytime` pass their computed `resultado` as a fourth argument so a correct
`no` is not mistaken for a mismatch.

After the `bCam` fix, `docs/logs.txt` confirms the sky/terrain constants
(`H=76`, `J=93`, ground `169`, sprite `269`) and numeric movement. Three
remaining log anomalies were traced to decompiled `byte`/`boolean` merges:
`advanceTimers` wrote `z=false`, `updateEntities` wrote `i=true`, and
`advanceClock` wrote `i=false` plus a fractional `(z-12)/24`. They are now
`0`, `1`, `0` and `Math.trunc(...)`, matching Java int semantics. The only
remaining mis-mapping is `canUseCurrentItemStub(b2,b3)` at `i.js:1361`: Java
calls `b(byte,byte)` there, but switching to `isInTileListC` would reintroduce
the freeze because the `C` list is built with invalid `new short[7]` JS.

The later 59-line capture confirmed those fixes (`resultado=no | OK`, `i=0`,
`aProgress=0..30`, movement `d=0->1->16`) and exposed two initialization false
positives: `constructor`/`resetGameState` logged before `H`/`skyBand` existed and
`loadTileData` logged before reading the 4-byte header. Their `diagnostico()`
calls now run where those values are available, still once per method.

Remaining toggles:

| flag | effect |
|---|---|
| `__WM_DEBUG_AUTOMOVE` | Forces `bCam[0]` in `update` |
| `__WM_DEBUG_DRAW` | Sprite/atlas trace in `resources/c.js` |

---

## 9. Porting gotchas

- Many silent `try/catch (_e) {}` blocks: failures often appear as no-ops, not exceptions.
  Check the console (`[i]`, `[i.js]`, `[paint]`).
- `this.<letter>` fields are overloaded across merged inner classes; do not assume
  `this.e`/`this.u`/`this.a` mean the same thing throughout the file.
- `_drawTileGradient` and `renderTileColumn16` are two ports of the same Java method and
  have diverged (e.g. the tuft block exists only in the latter, and only the latter's
  horizon test uses `|0`).
- In the port, `skyBand` is `169 - H` (the Java `I`), while Java `J` is `37`. The comment
  at `i.js:510-517` confuses the two; `_drawEntityClip` uses `H + skyBand = 169` instead
  of `H + J = 113`. Today this makes no difference because entities cross neither boundary.
