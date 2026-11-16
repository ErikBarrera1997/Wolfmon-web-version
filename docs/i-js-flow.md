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
- Render debugging (`i.js:107-140`): `dbgR`, `dbgOnce`, gated by `__WM_DEBUG_RENDER`.
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

Clears `this.bCam[0..8]` and maps the J2ME code to movement/action indices:

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
3. Clock loop: accumulates `dt` and calls `advanceClock(1)` (`i.js:2158`) every 16 ms
   (day) or 800 ms (night/depending on `C`).
4. `updateEntities()` (`i.js:1126`) — entity AI/movement.
5. `__WM_DEBUG_AUTOMOVE` forces `bCam[0]` for testing.

`advanceTimers(dt)` (`i.js:851`) is another gameplay timer accumulator (autosave,
events, objectives) that runs through its own path.

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
         ├─ (debug) tuft drawing pass   [__WM_DEBUG_TUFTS only]
         └─ _renderMinimap(g)           i.js:4120
 └─ debug HUD (__WM_DEBUG_HUD !== false)  i.js:535-551
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

## 7. Horizon tufts and `__WM_DEBUG_TUFTS`

The "tuft" scatter block (`i.java:7405-7441`) was ported to `renderTileColumn16`
(`i.js:7060-7102`). Diagnostics:

- `i7` is the **number of scanlines** in the band, not a tile ID.
- With `H=76` (`i.java:579`), `I=93`, and `J=I*40/100=37` (`i.java:7016-7023`), the
  16-argument calls produce heights 37/56 (sky), 53/23 (terrain), and 7/20 (entities).
  `i7 === 66` **never occurs**.
- Also, in Java the `u/v/e` arrays are only written to and reset (`i.java:3170-3188`);
  they are never read for drawing. This is dead code in the original as well.
- Therefore, `tuftCount` remains 0, faithfully.

To inspect them on screen, there is a debug toggle, off by default:

```
__WM_DEBUG_TUFTS = true
```

It enables three things:
1. Resets `tuftCount` at the start of every frame (`i.js:2490`);
2. Forces the `i7 === 66` gate to `i7 === 66 || __WM_DEBUG_TUFTS` (`i.js:7079`), so the
   scatter runs in the entity bands (at y≈76/83, across the screen);
3. Draws each point in `_renderAll` (`i.js:2496-2505`): cyan if `tuftFlag` is 1, magenta
   if 0, using `fillRect(x, y, 2, 2)`, and logs the count every 60 frames.

With the flag off, behavior is identical to the faithful port (`tuftCount === 0`).

---

## 8. Relevant debug toggles

| flag | effect |
|---|---|
| `__WM_DEBUG_RENDER` | `[dbg-render]` logs from `i.js` (ON by default) |
| `__WM_DEBUG_HUD` | State overlay in `paintScreen` (ON by default) |
| `__WM_DEBUG_AUTOMOVE` | Forces `bCam[0]` in `update` |
| `__WM_DEBUG_TUFTS` | Forced scatter + point drawing (OFF by default) |
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
