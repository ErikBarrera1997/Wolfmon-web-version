import test from 'node:test';
import assert from 'node:assert/strict';

import {
  Graphics,
  Font,
  Image,
  RecordStore,
  FACE_MONOSPACE,
  STYLE_BOLD,
  SIZE_SMALL,
  setCanvasFactory,
} from '../src/j2me/index.js';
import { createFakeCanvas } from '../src/images/fakeCtx.js';

function makeGraphics() {
  const canvas = createFakeCanvas(176, 208);
  const g = new Graphics(canvas.getContext('2d'));
  return { canvas, g, ctx: canvas.getContext('2d') };
}

test('Graphics.setColor emits fill and stroke styles as rgb', () => {
  const { g, ctx } = makeGraphics();
  g.setColor(0xffdd00);
  const colors = ctx.ops.filter((op) => op.op.startsWith('set'));
  assert.ok(colors.some((op) => op.op === 'setFillStyle' && op.args[0] === 'rgb(255,221,0)'));
  assert.ok(colors.some((op) => op.op === 'setStrokeStyle' && op.args[0] === 'rgb(255,221,0)'));
});

test('Graphics primitives emit expected ops', () => {
  const { g, ctx } = makeGraphics();
  g.fillRect(1, 2, 3, 4);
  g.drawRect(5, 6, 7, 8);
  g.drawLine(0, 0, 10, 10);
  assert.ok(ctx.ops.some((op) => op.op === 'fillRect' && op.args.join(',') === '1,2,3,4'));
  assert.ok(ctx.ops.some((op) => op.op === 'strokeRect' && op.args.join(',') === '5,6,7,8'));
  assert.ok(ctx.ops.some((op) => op.op === 'lineTo' && op.args.join(',') === '10,10'));
});

test('Graphics.drawString applies anchors', () => {
  const { g, ctx } = makeGraphics();
  g.drawString('AB', 100, 50, Graphics.RIGHT | Graphics.TOP);
  const call = ctx.ops.find((op) => op.op === 'fillText');
  assert.equal(call.args[0], 'AB');
  assert.ok(call.args[1] < 100, 'RIGHT anchor shifts x left');
  assert.ok(call.args[2] > 50, 'TOP anchor shifts y by ascent');
});

test('Graphics.setClip stores clip and getters report it', () => {
  const { g } = makeGraphics();
  g.setClip(10, 20, 30, 40);
  assert.equal(g.getClipX(), 10);
  assert.equal(g.getClipY(), 20);
  assert.equal(g.getClipWidth(), 30);
  assert.equal(g.getClipHeight(), 40);
  g.clipRect(0, 0, 25, 35);
  assert.deepEqual([g.getClipX(), g.getClipY(), g.getClipWidth(), g.getClipHeight()], [10, 20, 15, 15]);
});

test('Font metrics depend on size constants', () => {
  const small = Font.getFont(0, 0, 8);
  const medium = Font.getFont(0, 0, 0);
  const large = Font.getFont(0, 0, 16);
  assert.equal(small.getHeight(), 15);
  assert.equal(medium.getHeight(), 17);
  assert.equal(large.getHeight(), 21);
  const mono = Font.getFont(FACE_MONOSPACE, STYLE_BOLD, SIZE_SMALL);
  assert.match(mono.toCss(), /bold/);
  assert.match(mono.toCss(), /monospace/);
  assert.ok(mono.stringWidth('xxxx') > mono.stringWidth('x'));
});

test('Image.createImage supports offscreen getGraphics', () => {
  setCanvasFactory(createFakeCanvas);
  const img = Image.createImage(16, 16);
  assert.equal(img.getWidth(), 16);
  assert.equal(img.getHeight(), 16);
  const off = img.getGraphics();
  off.setColor(0x00ff00);
  off.fillRect(0, 0, 16, 16);
  const ops = img.canvas.getContext('2d').ops;
  assert.ok(ops.some((op) => op.op === 'fillRect' && op.args[0] === 0));
});

test('RecordStore roundtrip, null on missing store, delete works', () => {
  RecordStore.deleteRecordStore('teststore');
  assert.equal(RecordStore.openRecordStore('teststore', false), null);
  const rs = RecordStore.openRecordStore('teststore', true);
  rs.addRecord(new Uint8Array([1, 2, 3]));
  rs.setRecord(0, new Uint8Array([4, 5, 6, 7]));
  assert.equal(rs.getNumRecords(), 1);
  assert.deepEqual(Array.from(rs.getRecord(0)), [4, 5, 6, 7]);
  RecordStore.deleteRecordStore('teststore');
  assert.equal(RecordStore.openRecordStore('teststore', false), null);
});
