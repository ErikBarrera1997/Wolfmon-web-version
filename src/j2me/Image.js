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
    throw new Error('Image.createImage(byte[]): use Image.decodePNG instead');
  }

  static async decodePNG(bytes) {
    if (typeof createImageBitmap === 'undefined') {
      throw new Error(
        'Image.decodePNG: createImageBitmap is not available (browser only)',
      );
    }
    const blob = new Blob([bytes], { type: 'image/png' });
    const bitmap = await createImageBitmap(blob);
    const factory = getCanvasFactory();
    if (!factory) {
      throw new Error('Image.decodePNG: no canvas factory available');
    }
    const canvas = factory(bitmap.width, bitmap.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);
    return new Image(canvas);
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
