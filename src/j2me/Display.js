let canvas = null;

export class Display {
  static setCurrent(displayable) {
    canvas = displayable;
    if (displayable && typeof displayable.showNotify === 'function') {
      displayable.showNotify();
    }
  }

  static getDisplay() {
    return Display;
  }

  static getCurrent() {
    return canvas;
  }

  static getWidth() {
    return 176;
  }

  static getHeight() {
    return 208;
  }

  static getCanvas() {
    return canvas;
  }
}
