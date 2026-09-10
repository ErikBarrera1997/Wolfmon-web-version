import { Display } from '../j2me/Display.js';

export const SCREEN_W = 176;
export const SCREEN_H = 208;

export class Screen {
  constructor() {
    this.aText = new Array(2);
    this.aText[0] = '';
    this.aText[1] = '';
    this.d = 1;
    this._softKeyIdx = 0;
  }

  setTitle(text, index) {
    const c = Display.getCanvas();
    if (c == null) return;
    this.aText[index] = text;
    if (this === c._currentScreen) {
      c.setBarText(text, index);
    }
  }

  setInputMode(mode) {
    const c = Display.getCanvas();
    if (c == null) return;
    this.d = mode;
    if (this === c._currentScreen) {
      c.setInputMode(mode);
    }
  }

  paintScreen(_g) {}
  keyPressed(_keyCode) {}
  charTyped(_code1, _code2, _char) {}
  screenEntered() {}
  update(_dt) {}
}
