export function createFakeCanvas(width, height) {
  const ops = [];
  const ctx = {
    canvas: null,
    ops,
    _fillStyle: '',
    _strokeStyle: '',
    _font: '',
    lineWidth: 1,
    save() {
      ops.push({ op: 'save', args: [] });
    },
    restore() {
      ops.push({ op: 'restore', args: [] });
    },
    beginPath() {
      ops.push({ op: 'beginPath', args: [] });
    },
    moveTo(x, y) {
      ops.push({ op: 'moveTo', args: [x, y] });
    },
    lineTo(x, y) {
      ops.push({ op: 'lineTo', args: [x, y] });
    },
    rect(x, y, w, h) {
      ops.push({ op: 'rect', args: [x, y, w, h] });
    },
    ellipse(cx, cy, rx, ry, rot, a0, a1, acw) {
      ops.push({ op: 'ellipse', args: [cx, cy, rx, ry, rot, a0, a1, acw] });
    },
    arc(x, y, r, a0, a1, acw) {
      ops.push({ op: 'arc', args: [x, y, r, a0, a1, acw] });
    },
    clip() {
      ops.push({ op: 'clip', args: [] });
    },
    stroke() {
      ops.push({ op: 'stroke', args: [] });
    },
    fill() {
      ops.push({ op: 'fill', args: [] });
    },
    fillRect(x, y, w, h) {
      ops.push({ op: 'fillRect', args: [x, y, w, h] });
    },
    strokeRect(x, y, w, h) {
      ops.push({ op: 'strokeRect', args: [x, y, w, h] });
    },
    drawImage(img, x, y) {
      ops.push({ op: 'drawImage', args: [img, x, y] });
    },
    fillText(text, x, y) {
      ops.push({ op: 'fillText', args: [text, x, y] });
    },
    measureText(text) {
      return { width: text.length * 7.2 };
    },
  };
  Object.defineProperty(ctx, 'fillStyle', {
    get() {
      return ctx._fillStyle;
    },
    set(value) {
      ctx._fillStyle = value;
      ops.push({ op: 'setFillStyle', args: [value] });
    },
  });
  Object.defineProperty(ctx, 'strokeStyle', {
    get() {
      return ctx._strokeStyle;
    },
    set(value) {
      ctx._strokeStyle = value;
      ops.push({ op: 'setStrokeStyle', args: [value] });
    },
  });
  Object.defineProperty(ctx, 'font', {
    get() {
      return ctx._font;
    },
    set(value) {
      ctx._font = value;
      ops.push({ op: 'setFont', args: [value] });
    },
  });

  const canvas = {
    width,
    height,
    getContext(type) {
      return type === '2d' ? ctx : null;
    },
  };
  ctx.canvas = canvas;
  return canvas;
}
