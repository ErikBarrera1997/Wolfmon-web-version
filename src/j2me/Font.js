export const FACE_SYSTEM = 0;
export const FACE_MONOSPACE = 32;
export const FACE_PROPORTIONAL = 64;

export const STYLE_PLAIN = 0;
export const STYLE_BOLD = 1;
export const STYLE_ITALIC = 2;
export const STYLE_UNDERLINED = 4;

export const SIZE_SMALL = 8;
export const SIZE_MEDIUM = 0;
export const SIZE_LARGE = 16;

const PIXEL_SIZES = { [SIZE_SMALL]: 11, [SIZE_MEDIUM]: 13, [SIZE_LARGE]: 17 };

let measurer = null;

export function setMeasurer(ctx) {
  measurer = ctx;
}

export function measureWidth(str, font, ctx = measurer) {
  if (ctx && typeof ctx.measureText === 'function') {
    const saved = ctx.font;
    ctx.font = font.toCss();
    const width = Math.ceil(ctx.measureText(String(str)).width);
    ctx.font = saved;
    return width;
  }
  const factor = font.face & FACE_PROPORTIONAL ? 0.55 : 0.6;
  return Math.ceil(String(str).length * font.px * factor);
}

export class Font {
  constructor(face, style, size) {
    this.face = face;
    this.style = style;
    this.size = size;
    this.px = PIXEL_SIZES[size] ?? 13;
  }

  static getFont(face, style, size) {
    return new Font(face, style, size);
  }

  getHeight() {
    return this.px + 4;
  }

  stringWidth(str) {
    return measureWidth(str, this);
  }

  toCss() {
    const weight = this.style & STYLE_BOLD ? 'bold ' : '';
    const italic = this.style & STYLE_ITALIC ? 'italic ' : '';
    const family = this.face & FACE_MONOSPACE ? 'monospace' : 'sans-serif';
    return `${italic}${weight}${this.px}px ${family}`;
  }
}

Font.FACE_SYSTEM = FACE_SYSTEM;
Font.FACE_MONOSPACE = FACE_MONOSPACE;
Font.FACE_PROPORTIONAL = FACE_PROPORTIONAL;
Font.STYLE_PLAIN = STYLE_PLAIN;
Font.STYLE_BOLD = STYLE_BOLD;
Font.STYLE_ITALIC = STYLE_ITALIC;
Font.STYLE_UNDERLINED = STYLE_UNDERLINED;
Font.SIZE_SMALL = SIZE_SMALL;
Font.SIZE_MEDIUM = SIZE_MEDIUM;
Font.SIZE_LARGE = SIZE_LARGE;
