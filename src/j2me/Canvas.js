import { Graphics } from '../images/Graphics.js';
import { Display } from './Display.js';

let dirty = false;

export class Canvas {
  constructor(element) {
    this.canvas = element || null;
    this._titles = ['', ''];
    this._ctx = null;
    this._currentScreen = null;
    this.inputMode = 0;
  }

  getWidth() {
    return 176;
  }

  getHeight() {
    return 208;
  }

  repaint() {
    dirty = true;
  }

  serviceRepaints() {
    if (!dirty) return;
    dirty = false;
    const wrapper = Display.getCanvas();
    if (!wrapper) return;
    const canvasEl = wrapper.canvas;
    if (!canvasEl) return;
    this._ctx = canvasEl.getContext('2d');
    const g = new Graphics(this._ctx);
    this.paint(g);
  }

  paint(_g) {}

  keyPressed(_keyCode) {}
  keyReleased(_keyCode) {}
  charTyped(_charCode, _keyCode) {}
  showNotify() {}
  hideNotify() {}

  setBarText(text, index) {
    this._titles[index || 0] = text || '';
  }

  getBarText(index) {
    return this._titles[index || 0] || '';
  }

  setInputMode(mode) {
    this.inputMode = mode;
  }
}
