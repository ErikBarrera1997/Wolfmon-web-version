import { Display } from '../j2me/Display.js';

export const SCREEN_W = 176;
export const SCREEN_H = 208;

export class Screen {
  constructor() {
    this.a = new Array(2);
    this.a[0] = '';
    this.a[1] = '';
    this.d = 1;
  }

  setTitle(text, index) {
    const c = Display.getCanvas();
    if (c == null) return;
    this.a[index] = text;
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
