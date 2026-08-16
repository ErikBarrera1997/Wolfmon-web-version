import test from 'node:test';
import assert from 'node:assert/strict';

import { Manager, Player, VolumeControl } from '../audio/manager.js';

test('Manager.createPlayer returns a Player for the given source', () => {
  const source = new Uint8Array([1, 2, 3]);
  const player = Manager.createPlayer(source, 'audio/midi');
  assert.ok(player instanceof Player);
  assert.equal(player.type, 'audio/midi');
  assert.equal(player.source, source);
});

test('Player exposes the MIDP media lifecycle used by n.java', () => {
  const player = Manager.createPlayer(new Uint8Array(0), 'audio/midi');
  assert.equal(typeof player.prefetch, 'function');
  assert.equal(typeof player.start, 'function');
  assert.equal(typeof player.stop, 'function');
  assert.equal(typeof player.close, 'function');
  assert.equal(typeof player.setLoopCount, 'function');
  player.setLoopCount(3);
  player.prefetch();
  player.start();
  player.stop();
});

test('Player.getControl returns VolumeControl', () => {
  const player = Manager.createPlayer(new Uint8Array(0), 'audio/midi');
  assert.equal(player.getControl('VolumeControl'), VolumeControl);
  assert.equal(player.getControl('ToneControl'), null);
  assert.equal(typeof VolumeControl.setLevel, 'function');
  VolumeControl.setLevel(100);
  assert.equal(VolumeControl.getLevel(), 100);
});
