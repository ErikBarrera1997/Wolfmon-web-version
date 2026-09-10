import { Font } from '../j2me/Font.js';
import { DataInputStream } from '../j2me/DataInputStream.js';
import * as c from '../resources/c.js';
import * as m from './m.js';
import * as n from './n.js';
import { j, createMenu, setUpArrow, setDownArrow, setEngine } from './j.js';
import { e } from './e.js';
import { a as WaitScreen } from './a.js';
import { g as Transition } from './g.js';
import { RecordStore } from '../j2me/RecordStore.js';
import { i as GameScreen } from './i.js';
import { d as CinemaScreen } from './d.js';

const CX = 176 >> 1;
const CY = 208 >> 1;

let langIdx = -1;
let langReady = 1;
let bootPhase = 1;
let menuSpritesH = 26;
let objectives = new Int32Array(4);
let hasSave = false;
let worldLevel = 0;
let gameScreen = null;
let cinemaScreen = null;
let soundLoaded = false;
let soundBank = {};
let cachedLangNames = null;
let gameState = 0;
let inGameState = false;
let sceneCounter = 0;

const upArrow = 85;
const downArrow = 89;



function createLanguageMenu(preselected) {
  const title = preselected === -1 ? 'Language' : c.getString(9);
  const menu = new j(title, -1);
  if (preselected >= 0) menu.setTitle('', -1);
  menu.setItem(0, '', 7, -1);
  const names = cachedLangNames || [];
  let locale = null;
  try { locale = navigator.language?.substring(0, 2); } catch (_e) {}
  for (let i = 0; i < names.length; i++) {
    const semi = names[i].indexOf(';');
    const len = semi === -1 ? names[i].length : semi;
    const nameStr = names[i].substring(0, len);
    menu.addItem(new e(nameStr, menu.itemMarginLeft, 2), -1);
    if (i === preselected || (semi !== -1 && preselected === -1 && names[i].substring(len + 1).startsWith(locale || ''))) {
      menu.selectItem(i);
      preselected = i;
    }
  }
  return menu;
}

export class h {
  constructor() {
    this._soundLoadState = 0;
  }

  paintGauge(g, _menuIdx) {
    if (bootPhase < 7 || langReady < 5) return;
    c.drawSprite(2, CX, 8, g);
  }

  populateMenu(menu, idx) {
    menu.setTitle('', -1);
    if (idx === 0) {
      if (!hasSave) menu.removeItem(0);
      menu.selectItem(0);
      if (n.isSoundEnabled()) {
        loadSoundBank().then(() => {
          n.playSound(62, -1);
        });
      }
    }
    if (idx === 1) {
      menu.setItemValue(0, worldLevel);
      menu.setItemValue(1, n.isSoundEnabled() ? 1 : 0);
      menu.addItem(new e(c.getString(9), menu.itemMarginLeft, 2), 6);
    }
    if (idx === 8) {
      menu.setItemText(0, c.getStringFormatted(21, ['v1.06']));
    }
    if (idx === 3) {
      menu.setItemValue(2, 1);
      menu.setItemValue(3, 1);
    }
  }

  async handleEvent(eventId) {
    if (eventId === 1) {
      console.log('[h] handleEvent(1) begin');
      n.setSoundEnabled(false);
      try {
        const data = m.loadRecord('l');
        langIdx = data ? data[0] : -1;
      } catch (_e) {
        langIdx = -1;
      }
      try { cachedLangNames = await c.getLanguageNames(); } catch (_e) { cachedLangNames = []; }
      m.postEvent(langIdx === -1 ? 6 : 8, this);
      await c.loadResources(0);
      console.log('[h] resources group 0 loaded');

      langReady = 4;
      if (bootPhase >= 5) m.postEvent(11, this);

      await c.loadResources(1);
      console.log('[h] resources group A loaded');
      setEngine(this);
      setUpArrow(upArrow);
      setDownArrow(downArrow);
      checkSaveData();
      loadHighScores();
      await loadMenuSprites();
      console.log('[h] menu sprites loaded');

      await waitFor(() => bootPhase > 4);

      if (n.isSoundEnabled()) await loadSoundBank();

      langReady = 5;
      await waitFor(() => bootPhase >= 7);
      console.log('[h] bootPhase >= 7, showing menu');

      showMenuOrGame();
      await waitFor(() => m.getCurrentScreen() instanceof j);
      console.log('[h] menu screen active');

      menuSpritesH = c.getSpriteData(2, 3);
      try { await c.unloadGroup(0); } catch (_e) {}
    }
  }

  dispatchEvent(eventId, obj) {
    let menu = null;
    if (obj instanceof j) menu = obj;

    switch (eventId) {
      case 19:
        m.requestDestroy();
        return;

      case 3: {
        const sel = menu.getItemId(menu.selectedIndex);
        n.setSoundEnabled(sel === 1);
        if (n.isSoundEnabled()) {
          m.setNextScreen(WaitScreen.createWaitScreen(-1));
          loadSoundBank().then(() => {
            n.playSound(62, -1);
            m.setNextScreen(menu);
          });
        }
        return;
      }

      case 4:
        worldLevel = menu.getItemId(menu.selectedIndex);
        menu.setItemText(0, c.getString([45, 46, 47][worldLevel]));
        return;

      case 5: {
        const val = menu.getItemId(menu.selectedIndex) === 1;
        if (!val) return;
        return;
      }

      case 2: {
        const val = menu.getItemId(menu.selectedIndex);
        try {
          m.saveRecord(new Uint8Array([val]), 'ws');
        } catch (_e) {}
        return;
      }

      case 6:
        m.setNextScreen(createLanguageMenu(langIdx));
        return;

      case 7:
        langIdx = menu.selectedIndex;
        try {
          m.saveRecord(new Uint8Array([langIdx]), 'l');
        } catch (_e) {}
        /* falls through */
      case 8: {
        m.setNextScreen(WaitScreen.createWaitScreen(-1));
        c.setLanguage(langIdx);
        c.loadResources(2).then(() => {
          if (langReady === 5) {
            m.setNextScreen(createMenu(1));
          } else {
            bootPhase = 3;
            bootPhase = 4;
            m.setNextScreen(createMenu(4));
          }
        });
        return;
      }

      case 9:
      case 10: {
        n.setSoundEnabled(eventId === 9);
        bootPhase = 5;
        langReady = (langReady === 4) ? 0 : -1;
        m.postEvent(11, this);
        return;
      }

      case 11: {
        if (langReady < 2) {
          bootPhase = 6;
          langReady++;
          const sprites = [-1, 25, 23];
          const bgs = [0, 0, 0];
          const durations = [0, 2500, 3000];
          let scr;
          if (langReady === 1) {
            scr = Transition.createTransition(0);
            scr._event = 11;
          } else {
            scr = WaitScreen.createProgressScreen(sprites[langReady], bgs[langReady]);
            scr._event = 11;
          }
          if (langReady > 0) {
            if (scr instanceof Transition) {
              scr._acceptInput = true;
              scr._firstPaint = true;
              scr.setDuration(durations[langReady]);
            } else {
              scr.setTimer(durations[langReady]);
            }
          }
          m.setNextScreen(scr);
          return;
        }
        if (m.getCurrentScreen() instanceof WaitScreen) {
          const ws = m.getCurrentScreen();
          ws._event = -1;
        }
        bootPhase = 7;
        return;
      }

      case 21:
      case 20:
      case 13: {
        m.setNextScreen(WaitScreen.createWaitScreen(-1));
        n.stopPlayer();
        waitForScreen(WaitScreen).then(() => {
          loadMenuSprites().then(() => {
            if (eventId === 13) {
              gameScreen = createMenu(7);
            } else if (eventId === 12) {
              gameScreen = createMenu(8);
            }
            showMenuOrGame();
          });
        });
        return;
      }

      case 12: {
        resetAllData();
        m.setNextScreen(createMenu(3));
        return;
      }

      case 24: {
        resetAllData();
        m.setNextScreen(createMenu(3));
        return;
      }

      case 16: {
        gameState = 1;
        m.setNextScreen(WaitScreen.createWaitScreen(-1));
        waitForScreen(WaitScreen).then(async () => {
          await unloadWorldSpritesAsync();
          worldLevel = 0;
          await loadWorldSpritesForLevel(0);
          if (!cinemaScreen) cinemaScreen = new CinemaScreen();
          cinemaScreen.showNewGameMenu();
          inGameState = false;
          sceneCounter = 1;
          if (n.isSoundEnabled()) n.playSound(58, -1);
          gameState = 4;
          m.setNextScreen(cinemaScreen);
        });
        return;
      }

      case 22:
      case 25: {
        gameState = 1;
        if (cinemaScreen && cinemaScreen.scene > 7) sceneCounter = 0;
        if (sceneCounter !== 0) {
          m.setNextScreen(WaitScreen.createWaitScreen(-1));
          loadWorldSpritesForLevel(worldLevel).then(() => {
            gameState = 4;
            if (n.isSoundEnabled()) n.playSound(58, -1);
            m.setNextScreen(cinemaScreen);
          });
          return;
        }
        if (eventId === 22) inGameState = false;
        loadGameWorldResources().then(() => startOrResumeGame());
        return;
      }

      case 26:
        m.setNextScreen(createMenu(gameScreen ? 2 : 3));
        return;

      case 28:
        m.setNextScreen(WaitScreen.createWaitScreen(-1));
        m.setNextScreen(createMenu(5));
        return;

      case 27:
      case 29:
        return;

      default:
        return;
    }
  }
}

function waitFor(cond) {
  return new Promise((resolve) => {
    const check = () => {
      if (cond()) resolve();
      else setTimeout(check, 10);
    };
    check();
  });
}

function waitForScreen(type) {
  return new Promise((resolve) => {
    const check = () => {
      if (m.getCurrentScreen() instanceof type) resolve();
      else setTimeout(check, 10);
    };
    check();
  });
}

function checkSaveData() {
  hasSave = false;
  try {
    const rs = RecordStore.openRecordStore('w', false);
    if (rs != null) {
      hasSave = true;
      worldLevel = 1;
    }
    const data = m.loadRecord('ws');
    if (data != null) worldLevel = data[0];
  } catch (_e) {}
}

function loadHighScores() {
  try {
    const data = m.loadRecord('wh');
    if (data) {
      let off = 0;
      for (let i = 0; i < 3; i++) {
        objectives[i] = (data[off] << 24) | (data[off + 1] << 16) | (data[off + 2] << 8) | data[off + 3];
        off += 4;
      }
    }
  } catch (_e) {}
}

async function loadMenuSprites() {
  try { await c.loadResources(2); } catch (_e) {}
  try { await c.loadResources(46); } catch (_e) {}
  try { await c.loadResources(3); } catch (_e) {}
}

async function loadSoundBank() {
  if (soundLoaded) return;
  soundLoaded = true;
  try {
    await c.loadResources(1);
    const ids = c.getResourceGroup(1);
    for (let i = 0; i < ids.length; i++) {
      const res = c.getResource(ids[i]);
      soundBank[ids[i]] = res;
      n.registerSound(res, ids[i]);
    }
    await c.unloadGroup(1);
  } catch (_e) { console.error('[Audio] loadSoundBank error:', _e); }
}

function unloadMenuSprites() {
  try { c.unloadResource(2); } catch (_e) {}
  try { c.unloadResource(46); } catch (_e) {}
}

async function unloadWorldSpritesAsync() {
  const groups = [25,26,27,28,29,42,39,40,41,30,31,36,37,38,43,44,46];
  for (const g of groups) {
    try { await c.unloadResource(g); } catch (_e) {}
  }
}

async function loadWorldSpritesForLevel(level) {
  try { await c.loadResources(24); } catch (_e) {}
  const levelGroups = {
    0: [25,26,27,28,29],
    1: [31], 2: [30,43], 3: [36], 4: [37], 5: [38],
    6: [39,41], 7: [40,48], 8: [42], 9: [44], 10: [46,2]
  };
  const groups = levelGroups[level] || [];
  for (const g of groups) {
    try { await c.loadResources(g); } catch (_e) {}
  }
}

async function createOffscreenBuffers() {
  const groups = [24,53,23,6,7,8,9,15,17,18,10,11,12,13,20,21,16,14,45,22,47,48,49,50,51,32,33,34,35,19,52,54,55,56,57];
  for (const g of groups) {
    try { await c.loadResourceById(g); } catch (_e) {}
  }
}

async function loadGameWorldResources() {
  m.setNextScreen(WaitScreen.createWaitScreen(-1));
  n.stopPlayer();
  await waitForScreen(WaitScreen);
  unloadMenuSprites();
  await unloadWorldSpritesAsync();
  if (!gameScreen) gameScreen = new GameScreen();
  try { await c.loadResourceRaw(63); } catch (_e) { console.warn('[h] loadResourceRaw(63):', _e.message); }
  try { gameScreen.loadTileData(); } catch (_e) { console.warn('[h] loadTileData:', _e.message); }
  await createOffscreenBuffers();
}

function startOrResumeGame() {
  gameScreen.resetGameState();
  if (worldLevel !== 0) {
    try { gameScreen.loadWorldData(); } catch (_e) {}
  }
  gameScreen.playClickSound(false);
  inGameState = true;
  m.setNextScreen(gameScreen);
  gameState = 3;
}

function showMenuOrGame() {
  if (gameScreen != null) {
    m.setNextScreen(gameScreen);
    gameScreen = null;
  } else {
    m.setNextScreen(createMenu(0));
  }
}

function resetAllData() {
  hasSave = false;
  worldLevel = 0;
  try { m.deleteRecord('w'); } catch (_e) {}
  gameScreen = null;
}
