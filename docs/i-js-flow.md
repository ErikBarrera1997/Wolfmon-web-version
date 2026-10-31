# Flujo de `src/game/i.js`

`i.js` es el port de la pantalla principal de juego (`i extends p` / `Screen`), la clase más
grande del proyecto (~8k líneas). Este documento describe su estructura y el recorrido de un
frame: entrada → update → render. Sirve como mapa; los números de línea son orientativos y
pueden moverse.

Referencia Java: `src/game/i.java` (solo lectura, fuente de verdad). El JS mezcla varias clases
internas en un solo archivo, por eso hay nombres repetidos (`i`, `j`, `a`, `e`, ...).

---

## 1. Estructura del módulo

- Imports (`i.js:1-5`):
  - `Screen` (`p.js`), `Random` (`j2me/Random.js`), recursos (`resources/c.js`),
    audio/helpers (`n.js`) y el hub de runtime (`m.js`).
- Tablas de datos copiadas de `h.java` (`i.js:21-104`): `hDayBounds`, `hNightBounds`,
  `hDirB..hDirI` (vecindades de tiles para `renderSpriteOffset`), `hGroundProb`, prefabs de
  terreno `hPrefabs`, `hColorThresholds`.
- Declaración de campos "sueltos" a nivel de módulo (`i.js:12-17`): el port dejó referencias
  estilo Java (`A`, `B`, ...) y se declaran aquí para evitar `ReferenceError`. No son estado real.
- Debug de render (`i.js:107-140`): `dbgR`, `dbgOnce`, gate por `__WM_DEBUG_RENDER`.
- Clase `i` (`i.js:421`) y "level-1 store" al final (`i.js:8026-8036`) que copia los métodos
  estáticos al prototipo para que `this.metodo(...)` resuelva.

Convención clave: los helpers portados viven como **métodos estáticos** y se invocan con
`i.metodo.call(this, ...)`. No convertirlos en métodos de instancia (rompe el mapeo con el Java).

---

## 2. Ciclo de vida

### Construcción / reset — `resetGameState()` (`i.js:427-522`)

Inicializa todo el estado de la partida. Puntos relevantes:

- Buffers de tiles: `this.u`, `this.v`, `this.d`, `this.e`, `this.eArr`.
- Buffers de "tufts" del horizonte: `tuftX`, `tuftY`, `tuftFlag`, `tuftCount`, `tuftEnabled`
  (`i.js:434-442`). Ver §7.
- Random real: `this.a = new Random(Date.now())` (`i.js:477`). Es el tercer argumento de
  `randomBetween`.
- Constantes de layout: `this.H = 76` (horizonte, `i.java:579`) y `this.skyBand = 169 - H`
  (`i.js:518`).
- Reloj/estado: `this.i` (hora del juego), `this.h` (facing), `this.d/this.e` (tile del jugador),
  `this.C` (modo/estado), `this.m`, `this.I`, etc.

### Entrada al screen — `screenEntered()` (`i.js:599`)

Hook de la clase base; en este port está prácticamente vacío (el arranque real ocurre en `m.js`).

### Entrada de teclado — `keyPressed(code)` (`i.js:804-849`)

Limpia `this.bCam[0..8]` y traduce el código J2ME a índices de movimiento/acción:

| código | acción        |
|-------:|---------------|
| 5      | pausa/menú (`postEvent(20)`) |
| 1,12   | `bCam[0]`     |
| 2,18   | `bCam[1]`     |
| 3,14   | `bCam[2]`     |
| 4,16   | `bCam[3]`     |
| 7,15   | `bCam[4]`     |
| 17     | `bCam[5]`     |
| 19     | `bCam[6]`     |
| 11     | `bCam[7]`     |
| 13     | `bCam[8]`     |

### Update — `update(dt)` (`i.js:562-597`)

1. `updateAmbientParticles(dt)` (`i.js:1050`) — partículas de clima/ambiente.
2. `updatePlacementState(dt)` (`i.js:1042`) — estado de colocación/construcción.
3. Bucle de reloj: acumula `dt` y llama `advanceClock(1)` (`i.js:2158`) a 16 ms (día) o 800 ms
   (noche/según `C`).
4. `updateEntities()` (`i.js:1126`) — IA/movimiento de entidades.
5. `__WM_DEBUG_AUTOMOVE` fuerza `bCam[0]` para pruebas.

`advanceTimers(dt)` (`i.js:851`) es otro acumulador de timers de gameplay (autosave,
eventos, objetivos) que corre por su propia vía.

---

## 3. Render: recorrido de un frame

```
paintScreen(g)                         i.js:524
 └─ g.setClip / fill negro
 └─ i._paintEntry.call(this, g)        i.js:2484
     └─ i._renderAll.call(this, g, true)   i.js:2489
         ├─ (debug) tuftCount = 0           [solo __WM_DEBUG_TUFTS]
         ├─ _renderTerrain(g)           i.js:3412  → _renderTerrainInner  i.js:3416
         ├─ _renderOverlay(g)           i.js:3409  (stub)
         ├─ _renderEntities(1, g)       i.js:3340
         ├─ _renderEntities(0, g)
         ├─ _renderEntities(2, g)
         ├─ (debug) pase de dibujo de tufts [solo __WM_DEBUG_TUFTS]
         └─ _renderMinimap(g)           i.js:4120
 └─ HUD de debug (__WM_DEBUG_HUD !== false)  i.js:535-551
```

### 3.1 Terreno / cielo — `_renderTerrainInner` (`i.js:3416`)

Port de `i.java` `d(Graphics)`. Decide el "tipo" de escena (`b1`) según `this.i`, calcula colores
día/noche y pinta dos franjas de gradiente con `_drawTileGradient` (`i.js:6728`):

- banda alta: `_drawTileGradient(j=H*70/100, 0, j, ...)` (`i.js:3461`)
- banda baja: `_drawTileGradient(H-j, j, H, ...)` (`i.js:3477`)

También dibuja los puntos de "compass"/estrellas cuando es de noche (`i.js:3480+`).
`_fillTerrainBg` (`i.js:3321`) rellena el fondo con el sprite 269.

### 3.2 Entidades — `_renderEntitiesInner` (`i.js:3346`)

Port del bucle de 5 columnas (A) + 3 columnas (B) de `i.java:3985-4045`. Para cada columna
calcula tile visible `(b2,b3)` desde `this.d/e + hDayBounds[this.h]` y despacha según `paramInt`:

- `paramInt 1/0`: `_drawEntityClip(...)` (`i.js:3614`)
- `paramInt 2`: `_drawEntityMask(...)` (`i.js:3656`)

Al final llama `_drawTerrainColumn(...)` (`i.js:3810`), que dibuja la columna de terreno/prefabs
del horizonte.

### 3.3 Clipping y gradiente de entidad — `_drawEntityClip` (`i.js:3614`)

Decide si la entidad cruza la línea del horizonte (`H + skyBand`) y divide el dibujo en dos
pasadas. Cada pasada llama `renderCell20(...)` (`i.js:6903`), que ajusta las coordenadas según
el día/noche (`hDayBounds`/`hNightBounds` vía `facingFromTileBits`) y delega en
`renderTileColumn16(...)` (`i.js:6922`).

`renderTileColumn16` es el port del método Java de 16 args `i.java:7289`: recorre la franja
scanline a scanline interpolando el color entre `paramInt4` y `paramInt5` y dibujando con
`setColor`/`drawLine` (no son sprites). `_drawTileGradient` (`i.js:6728`) es un **segundo port**
del mismo método Java, usado por el terreno; hoy están duplicados y divergen en detalles.

### 3.4 Máscara / objeto / overlay de entidad

- `_drawEntityMask` (`i.js:3656`): clip + objeto + animación (si `paramInt4 === 66`) + overlay.
- `_drawEntityObject` (`i.js:3673`): sombra/objeto de la entidad (switch 66/20/7).
- `_playEntityAnim` (`i.js:3735`): animación de entidades especiales.
- `_drawEntityOverlay` (`i.js:3699`) y `_drawEntityHouse` (`i.js:4097`): capas extra.

### 3.5 Minimapa y UI

- `_renderMinimap` (`i.js:4120`) → `_renderMinimapInner` (`i.js:4126`).
- `_renderUIBar` (`i.js:4674`), `_renderActionIcons` (`i.js:4987`), `_renderInventory`
  (`i.js:5035`), `_drawCompassMark` (`i.js:4767`), `_drawNumber` (`i.js:4780`).
- `_renderFullMinimap` (`i.js:4807`) para la vista de mapa completo.

---

## 4. Tiles, colisiones y mundo

- `readTileBits(x, y, mask, shift)` (`i.js:1599`): lectura del tile con máscara.
- `tileFieldBits` (`i.js:2387`): wrapper de `readTileBits`.
- `isWalkable(x, y)` (`i.js:2472`), `isTileBlocked` (`i.js:7531`), `canPlaceEntity`
  (`i.js:2453`), `isInTileSet` (`i.js:7557`).
- `loadTileData` (`i.js:637`), `loadWorldData` (`i.js:791`), `loadCollisionMap` (`i.js:7282`).
- `placeEntity` (`i.js:613`), `canPlaceEntity`, `stepEntity` (`i.js:2442`),
  `wanderEntity` (`i.js:2400`), `faceEntityTowards` (`i.js:2409`).
- Acciones de tile: `handleTileAction` (`i.js:1081`), `harvestTile` (`i.js:1580`),
  `handleTileField` (`i.js:7456`).

---

## 5. Inventario, salud, loot y guardado

- Inventario: `addItemToInventory` (`i.js:2051`), `removeItemFromInventory` (`i.js:2134`),
  `selectItemSlot` (`i.js:1723`), `isConsumablesFull` (`i.js:1965`).
- Salud/energía: `_calcHealth` (`i.js:2143`), `gainEnergy` (`i.js:1594`).
- Loot: `grantRandomLoot` (`i.js:1902`), `updatePickups` (`i.js:1990`).
- Persistencia: `writeSaveRecord` (`i.js:5290`), `calcScore` (`i.js:5244`), helpers
  `writeInt`/`readInt32BE`/etc. (`i.js:5215-5288`). Usa `RecordStore` vía `m.js`.
- Portal/efectos: `registerPortalEffect` (`i.js:1655`), `tickPortalEffects` (`i.js:1674`).

---

## 6. Aleatoriedad

- `this.a` es un `Random` J2ME (`src/j2me/Random.js`), bit-exacto con `java.util.Random`.
- `randomBetween(lo, hi, rng)` (`i.js:2479`) usa `rng.nextInt() >>> 1`.
- Ojo: `randomInt` (`i.js:607`) todavía usa `Math.random()`, no el `Random`; es una divergencia
  conocida respecto al original.

---

## 7. Tufts del horizonte y `__WM_DEBUG_TUFTS`

El bloque de dispersión de "tufts" (`i.java:7405-7441`) se portó en `renderTileColumn16`
(`i.js:7060-7102`). Diagnóstico:

- `i7` es el **número de scanlines** de la franja, no un id de tile.
- Con `H=76` (`i.java:579`), `I=93` y `J=I*40/100=37` (`i.java:7016-7023`), las llamadas de
  16 args producen alturas 37/56 (cielo), 53/23 (terreno) y 7/20 (entidades). `i7 === 66`
  **nunca ocurre**.
- Además, en el Java los arrays `u/v/e` solo se escriben y se resetan (`i.java:3170-3188`);
  nunca se leen para dibujar. Es código muerto también en el original.
- Por eso `tuftCount` se queda en 0 de forma fiel.

Para inspeccionarlo en pantalla hay un toggle de debug, apagado por defecto:

```
__WM_DEBUG_TUFTS = true
```

Activa tres cosas:
1. reset de `tuftCount` al inicio de cada frame (`i.js:2490`);
2. fuerza el gate `i7 === 66` a `i7 === 66 || __WM_DEBUG_TUFTS` (`i.js:7079`), de modo que el
   scatter se ejecuta en las franjas de entidad (y≈76/83, a lo ancho de la pantalla);
3. dibuja cada punto en `_renderAll` (`i.js:2496-2505`): cian si `tuftFlag` es 1, magenta si 0,
   con `fillRect(x, y, 2, 2)`, y loguea el conteo cada 60 frames.

Con el flag apagado el comportamiento es idéntico al fiel (`tuftCount === 0`).

---

## 8. Debug toggles relevantes

| flag | efecto |
|---|---|
| `__WM_DEBUG_RENDER` | logs `[dbg-render]` de `i.js` (por defecto ON) |
| `__WM_DEBUG_HUD` | overlay de estado en `paintScreen` (por defecto ON) |
| `__WM_DEBUG_AUTOMOVE` | fuerza `bCam[0]` en `update` |
| `__WM_DEBUG_TUFTS` | scatter forzado + dibujo de puntos (por defecto OFF) |
| `__WM_DEBUG_DRAW` | traza de sprites/atlas en `resources/c.js` |

---

## 9. Gotchas del port

- Muchos `try/catch (_e) {}` silenciosos: un fallo suele verse como no-op, no como excepción.
  Mirar consola (`[i]`, `[i.js]`, `[paint]`).
- Los `this.<letra>` están sobrecargados entre clases internas fusionadas; no asumir que
  `this.e`/`this.u`/`this.a` significan lo mismo en todo el archivo.
- `_drawTileGradient` y `renderTileColumn16` son dos ports del mismo método Java y han
  divergido (p.ej. el bloque de tufts solo está en el segundo, y el test de horizonte usa
  `|0` solo en el segundo).
- `skyBand` en el port es `169 - H` (el Java `I`), mientras que el Java `J` vale `37`. El
  comentario de `i.js:510-517` confunde ambos; `_drawEntityClip` usa `H + skyBand = 169` en vez
  de `H + J = 113`. Hoy no cambia nada porque las entidades no cruzan ninguna de las dos cotas.
