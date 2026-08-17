import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import * as c from '../src/resources/c.js';
import { Image } from '../src/images/Image.js';
import { loadAssetBytes } from '../src/resources/loader.js';

async function fakeDecodePNG(bytes) {
  return { __png: bytes.length };
}

test.before(() => {
  Image.decodePNG = fakeDecodePNG;
});

test('loadResources(2) loads the 6 languages and 233 strings', async () => {
  c.init();
  const results = await c.loadResources(2);
  assert.equal(results.length, 1);
  const strings = results[0];
  assert.ok(Array.isArray(strings));
  assert.equal(strings.length, 233);
  assert.equal(c.getString(0), 'Select');
  assert.equal(c.getString(9), 'Choose language');
  assert.equal(c.getResource(0), strings);
});

test('getLanguageNames returns the 6 bundled languages', async () => {
  const names = await c.getLanguageNames();
  assert.deepEqual(names, ['English', 'Deutsch', 'Français', 'Español', 'Italiano', 'Portuguese']);
});

test('getStringFormatted substitutes %N placeholders', () => {
  const text = c.getStringFormatted(21, ['Rovio']);
  assert.ok(text.startsWith('Wolf Moon\nRovio\n'));
  assert.ok(text.includes('www.rovio.com'));
});

test('loadResources(0) parses sprites 4 and 5 (rows + PNG names)', async () => {
  c.init();
  const results = await c.loadResources(0);
  assert.equal(results.length, 2);
  assert.equal(c.getSpriteData(23, 2), 152);
  assert.equal(c.getSpriteData(24, 0), 0);
  assert.equal(c.getSpriteData(25, 0), 133);
  assert.equal(c.getSpriteData(24, 1), 0);
  const ad = await loadAssetBytes('ad.png');
  const ae = await loadAssetBytes('ae.png');
  assert.deepEqual(results[0], { __png: ad.length });
  assert.deepEqual(results[1], { __png: ae.length });
  assert.equal(c.getResource(4).__png, ad.length);
  assert.equal(c.getResource(5).__png, ae.length);
});

test('loadResources(1) loads the sound bank as raw bytes', async () => {
  c.init();
  const results = await c.loadResources(1);
  assert.equal(results.length, 5);
  const expected = ['cj.mid', 'cf.mid', 'cg.mid', 'ch.mid', 'ci.mid'];
  for (let i = 0; i < expected.length; i++) {
    const bytes = await loadAssetBytes(expected[i]);
    assert.ok(results[i] instanceof Uint8Array);
    assert.equal(results[i].length, bytes.length);
  }
  assert.equal(c.getResource(62).length, 16207);
  assert.equal(c.getResource(63), undefined);
});

test('loadResources reuses cached resources on the second call', async () => {
  c.init();
  const first = await c.loadResources(0);
  const second = await c.loadResources(0);
  assert.equal(second[0], first[0]);
  assert.equal(second[1], first[1]);
});

test('unloadResource frees the image and its sprite rows', async () => {
  c.init();
  await c.loadResources(0);
  await c.unloadResource(4);
  assert.equal(c.getResource(4), null);
  assert.equal(c.getSpriteData(23, 2), 0);
  assert.notEqual(c.getResource(5), null);
  await c.unloadResource(5);
  assert.equal(c.getResource(5), null);
  assert.equal(c.getSpriteData(24, 0), 0);
});

test('loadResources with an out-of-range group throws (mirrors AIOOBE)', async () => {
  c.init();
  await c.loadResources(0);
  await assert.rejects(() => c.loadResources(46));
});

test('catalog and groups survive init like Java statics', async () => {
  c.init();
  await c.loadResources(0);
  c.init();
  await c.loadResources(0);
  const ad = await loadAssetBytes('ad.png');
  assert.deepEqual(c.getResource(4), { __png: ad.length });
  assert.equal(c.getSpriteData(23, 2), 152);
});

test('loader fetches from the real assets directory', async () => {
  const h = await loadAssetBytes('h');
  assert.equal(h.length, fs.statSync(new URL('../assets/h', import.meta.url)).size);
});
