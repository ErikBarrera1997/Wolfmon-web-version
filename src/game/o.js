import { FullCanvas } from '../j2me/FullCanvas.js';
import { Graphics } from '../images/Graphics.js';
import { Font } from '../j2me/Font.js';
import * as m from './m.js';

const MULTI_TAP = [
  [' ', '0'],
  ['.', ',', '?', '!', "'", '-', '(', ')', '@', '/', ':', '_', '1'],
  ['a', 'b', 'c', 'ä', 'å', '2'],
  ['d', 'e', 'f', '3'],
  ['g', 'h', 'i', '4'],
  ['j', 'k', 'l', '5'],
  ['m', 'n', 'o', 'ö', '6'],
  ['p', 'q', 'r', 's', '7'],
  ['t', 'u', 'v', '8'],
  ['w', 'x', 'y', 'z', '9'],
];

const PHONE_NAV = { 12:3, 18:4, 14:1, 16:2, 15:5, 11:7, 13:6 };

function mapKeyToAction(code) {
  if (code >= 48 && code <= 57) return code - 38;
  if (code === 42) return 20;
  if (code === 35) return 21;
  if (code === 8 || code === 27) return 6;
  const ma = getGameAction(code);
  switch (ma) {
    case 1: return 3;
    case 5: return 4;
    case 2: return 1;
    case 3: return 2;
    case 6: return 5;
    case 7: return 7;
    case 8: return 6;
  }
  return -1;
}

function getGameAction(code) {
  const map = { 38: 1, 37: 2, 39: 3, 40: 5, 13: 6, 32: 7 };
  return map[code] ?? -1;
}

export class o extends FullCanvas {
  constructor(element) {
    super(element);
    this._statusFont = Font.getFont(32, 0, 0);
    this._lastKeyTime = 0;
    this._lastKeyAction = 0;
    this._tapIndex = 0;
    this._tapKey = 0;
  }

  paint(g) {
    const screen = m.getCurrentScreen();
    if (screen == null) return;
    try {
      g.setClip(0, 0, 176, 208);
      screen.paintScreen(g);
      g.setFont(this._statusFont);
      g.setClip(0, 0, 176, 208);

      const y = 208 - 2;
      const lines = [this._titles[0], this._titles[1]];
      const skIdx = (screen._softKeyIdx != null) ? screen._softKeyIdx : 0;
      let x = 2;
      let anchorY = 36;
      for (let i = 0; i < 2; i++) {
        const s = lines[i];
        if (s && s.length > 0) {
          const highlight = (i === skIdx);
          g.setColor(0x000000);
          g.drawString(s, x - 1, y - 1, anchorY);
          g.drawString(s, x + 1, y - 1, anchorY);
          g.drawString(s, x - 1, y, anchorY);
          g.drawString(s, x + 1, y, anchorY);
          g.setColor(highlight ? 0xff7800 : 0xffffff);
          g.drawString(s, x, y, anchorY);
        }
        x = 176 - 2;
        anchorY = 40;
      }
    } catch (_e) { console.error('[paint]', _e); }
  }

  keyPressed(keyCode) {
    const screen = m.getCurrentScreen();
    if (screen == null) return;
    try {
      let action = mapKeyToAction(keyCode);
      if (this.inputMode === 3 && action >= 10 && action <= 21) {
        this._handleAction(action);
      } else {
        if (action >= 10 && action <= 21) {
          const remap = PHONE_NAV[action];
          if (remap != null) action = remap;
        }
        screen.keyPressed(action);
      }
    } catch (_e) {}
  }

  keyReleased(keyCode) {
    const screen = m.getCurrentScreen();
    if (screen == null) return;
    try {
      const action = mapKeyToAction(keyCode);
      if (this.inputMode === 3 && action >= 10 && action <= 19) {
        const now = Date.now();
        if (now - this._lastKeyTime > 1200) {
          const arr = MULTI_TAP[action - 10];
          const ch = arr[arr.length - 1];
          screen.charTyped(102, action, ch);
          this._tapIndex = 0;
          this._lastKeyTime = 0;
        }
      }
    } catch (_e) {}
  }

  showNotify() {
    m.setLifecycleState(11);
  }

  hideNotify() {
    m.setLifecycleState(12);
  }

  _handleAction(action) {
    const now = Date.now();
    const screen = m.getCurrentScreen();
    if (now - this._lastKeyTime < 700 && action === this._tapKey) {
      this._tapIndex++;
    } else {
      this._tapIndex = 0;
    }
    if (action === 21) {
      screen.charTyped(103, action, 0);
      return;
    }
    const idx = action - 10;
    if (idx >= MULTI_TAP.length || MULTI_TAP[idx].length <= 0) return;
    const ch = MULTI_TAP[idx][this._tapIndex % MULTI_TAP[idx].length];
    screen.charTyped(this._tapIndex > 0 ? 101 : 100, action, ch);
    this._lastKeyTime = now;
    this._tapKey = action;
  }
}
