import { Font, measureWidth } from './Font.js';

export const TOP = 0;
export const LEFT = 0;
export const HCENTER = 1;
export const VCENTER = 2;
export const RIGHT = 8;
export const BOTTOM = 32;
export const BASELINE = 64;

const DEFAULT_FONT = Font.getFont(0, 0, 0);

export class Graphics {
  constructor(ctx) {    this.ctx = ctx;
    this.canvas = ctx.canvas || null;
    this._font = DEFAULT_FONT;
    this._color = 0x000000;
    this._clip = {
      x: 0,
      y: 0,
      w: this.canvas ? this.canvas.width : 0,
      h: this.canvas ? this.canvas.height : 0,
    };
    this._clipStack = [];
  }

  setColor(rgb) {
    this._color = rgb & 0xffffff;
    this._applyColor();
  }

  _applyColor() {
    const css = `rgb(${(this._color >> 16) & 0xff},${(this._color >> 8) & 0xff},${this._color & 0xff})`;
    this.ctx.fillStyle = css;
    this.ctx.strokeStyle = css;
  }

  setFont(font) {
    this._font = font;
    this.ctx.font = font.toCss();
  }

  getFont() {
    return this._font;
  }

  fillRect(x, y, w, h) {
    this.ctx.fillRect(x, y, w, h);
  }

  drawRect(x, y, w, h) {
    this.ctx.strokeRect(x, y, w, h);
  }

  drawLine(x1, y1, x2, y2) {
    const c = this.ctx;
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
  }

  drawArc(x, y, w, h, startAngle, arcAngle) {
    this._arc(x, y, w, h, startAngle, arcAngle, 'stroke');
  }

  fillArc(x, y, w, h, startAngle, arcAngle) {
    this._arc(x, y, w, h, startAngle, arcAngle, 'fill');
  }

  _arc(x, y, w, h, startAngle, arcAngle, mode) {
    const c = this.ctx;
    const rx = w / 2;
    const ry = h / 2;
    const cx = x + rx;
    const cy = y + ry;
    const a0 = (startAngle * Math.PI) / 180;
    const a1 = ((startAngle + arcAngle) * Math.PI) / 180;
    c.beginPath();
    if (typeof c.ellipse === 'function') {
      c.ellipse(cx, cy, rx, ry, 0, a0, a1, true);
    } else {
      c.moveTo(cx + rx * Math.cos(a0), cy + ry * Math.sin(a0));
      c.lineTo(cx + rx * Math.cos(a1), cy + ry * Math.sin(a1));
    }
    if (mode === 'fill') c.fill();
    else c.stroke();
  }

  drawImage(img, x, y) {
    const src = img && img.canvas ? img.canvas : img;
    this.ctx.drawImage(src, x, y);
  }

  drawString(str, x, y, anchor) {
    const text = String(str);
    if (anchor == null) anchor = 0;
    const font = this._font;
    this.ctx.font = font.toCss();
    const w = measureWidth(text, font, this.ctx);
    const h = font.getHeight();
    if (anchor & RIGHT) x -= w;
    else if (anchor & HCENTER) x -= w >> 1;
    if (anchor & BOTTOM) y -= h;
    else if (anchor & VCENTER) y -= h >> 1;
    else if (!(anchor & BASELINE)) y += Math.round(h * 0.75);
    this.ctx.fillText(text, x, y);
  }

  setClip(x, y, w, h) {
    while (this._clipStack.length) {
      this.ctx.restore();
      this._clipStack.pop();
    }
    this._clipStack.push(this.ctx.save());
    this._clip = { x, y, w, h };
    this.ctx.beginPath();
    this.ctx.rect(x, y, w, h);
    this.ctx.clip();
    this._applyColor();
  }

  clipRect(x, y, w, h) {
    const a = this._clip;
    const nx = Math.max(a.x, x);
    const ny = Math.max(a.y, y);
    const nw = Math.min(a.x + a.w, x + w) - nx;
    const nh = Math.min(a.y + a.h, y + h) - ny;
    this.setClip(nx, ny, nw, nh);
  }

  getClipX() {
    return this._clip.x;
  }

  getClipY() {
    return this._clip.y;
  }

  getClipWidth() {
    return this._clip.w;
  }

  getClipHeight() {
    return this._clip.h;
  }
}

Graphics.TOP = TOP;
Graphics.LEFT = LEFT;
Graphics.HCENTER = HCENTER;
Graphics.VCENTER = VCENTER;
Graphics.RIGHT = RIGHT;
Graphics.BOTTOM = BOTTOM;
Graphics.BASELINE = BASELINE;
