import { Graphics } from './Graphics.js';
import { getCanvasFactory } from './environment.js';

export class Image {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  static createImage(arg0, arg1, arg2) {
    if (typeof arg0 === 'number' && typeof arg1 === 'number') {
      return Image.createBlank(arg0, arg1);
    }
    throw new Error(
      'Image.createImage(byte[]): PNG resource decode not implemented yet (arrives with the c.java port)',
    );
  }

  static createBlank(width, height) {
    const factory = getCanvasFactory();
    if (!factory) {
      throw new Error(
        'Image.createImage: no canvas factory available (browser or setCanvasFactory)',
      );
    }
    return new Image(factory(width, height));
  }

  getGraphics() {
    return new Graphics(this.canvas.getContext('2d'));
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
