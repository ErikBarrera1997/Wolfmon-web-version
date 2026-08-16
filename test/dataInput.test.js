import { test } from 'node:test';
import assert from 'node:assert/strict';

import { DataInputStream } from '../src/j2me/DataInputStream.js';

function bytes(...values) {
  return new Uint8Array(values);
}

test('DataInputStream reads big-endian integers', () => {
  const stream = DataInputStream.fromBytes(bytes(0x01, 0x02, 0x03, 0x04));
  assert.equal(stream.readInt(), 0x01020304);
  assert.equal(stream.position(), 4);
});

test('DataInputStream reads negative big-endian int', () => {
  const stream = DataInputStream.fromBytes(bytes(0xff, 0xff, 0xff, 0xff));
  assert.equal(stream.readInt(), -1);
});

test('DataInputStream reads signed shorts', () => {
  const stream = DataInputStream.fromBytes(bytes(0xff, 0xfe, 0x00, 0x2a));
  assert.equal(stream.readShort(), -2);
  assert.equal(stream.readShort(), 42);
});

test('DataInputStream reads signed and unsigned bytes', () => {
  const stream = DataInputStream.fromBytes(bytes(0xfe, 0x7f));
  assert.equal(stream.readByte(), -2);
  assert.equal(stream.readUnsignedByte(), 127);
});

test('DataInputStream reads UTF strings (length-prefixed)', () => {
  const payload = new TextEncoder().encode('Wolfmoon');
  const stream = DataInputStream.fromBytes(bytes(0x00, payload.length, ...payload));
  assert.equal(stream.readUTF(), 'Wolfmoon');
  assert.equal(stream.position(), 2 + payload.length);
});

test('DataInputStream readFully and skipBytes', () => {
  const stream = DataInputStream.fromBytes(bytes(1, 2, 3, 4, 5, 6));
  const out = new Uint8Array(2);
  stream.readFully(out);
  assert.deepEqual(Array.from(out), [1, 2]);
  assert.equal(stream.skipBytes(2), 2);
  assert.equal(stream.readUnsignedByte(), 5);
  assert.equal(stream.skipBytes(999), 1);
  assert.equal(stream.available(), 0);
});
