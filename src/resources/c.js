import { DataInputStream } from '../j2me/DataInputStream.js';
import { Image } from '../images/Image.js';
import { loadAssetBytes } from './loader.js';

console.log('[c.js] stamp=2026-08-29B');

let resources = null;
let spriteRows = null;
let catalog = null;
let groups = null;
let languageIndex = 0;
let langFilterFrom = -1;
let langFilterTo = -1;
const clipRectTemp = new Int32Array(4);

// ---- sprite debug instrumentation ----
// Toggle live from the console:  __WM_DEBUG_DRAW = false  silences these logs.
let _dbgDraw = 0;
const _missRows = new Map();
const _missImgs = new Map();
function dbgDrawEnabled() {
  const v = globalThis.__WM_DEBUG_DRAW;
  return v === undefined ? true : !!v;
}
function dbgDraw(...args) {
  if (!dbgDrawEnabled()) return;
  if (++_dbgDraw % 12 !== 0) return;
  console.log('[dbg-draw]', ...args);
}
function _missRow(id) {
  _missRows.set(id, (_missRows.get(id) || 0) + 1);
}
function _missImg(id, row) {
  _missImgs.set(id, (_missImgs.get(id) || 0) + 1);
}
function _flushMisses() {
  if (!dbgDrawEnabled()) return;
  if (_missRows.size) {
    const summary = [..._missRows].map(([id, n]) => 'id=' + id + ' x' + n).join(' ');
    console.log('[dbg-draw] MISSING ROWS:', summary);
    _missRows.clear();
  }
  if (_missImgs.size) {
    const summary = [..._missImgs].map(([id, n]) => 'id=' + id + ' x' + n).join(' ');
    console.log('[dbg-draw] MISSING IMAGES:', summary);
    _missImgs.clear();
  }
}

export function init() {
  resources = new Array(64);
  spriteRows = new Array(417);
}

async function getCatalog() {
  if (catalog) return catalog;
  const stream = DataInputStream.fromBytes(await loadAssetBytes('h'));
  const offsets = new Int32Array(64);
  const names = new Array(64);
  const lengths = new Int32Array(64);
  for (let i = 0; i < 64; i++) {
    offsets[i] = stream.readInt();
    names[i] = stream.readUTF();
    lengths[i] = stream.readInt();
  }
  stream.close();
  catalog = [offsets, names, lengths];
  return catalog;
}

export async function loadGroups() {
  if (groups) return;
  groups = new Array(3);
  groups[2] = new Int16Array(1);
  try {
    const stream = DataInputStream.fromBytes(await loadAssetBytes('g'));
    for (let i = 0; i < 2; i++) {
      const n = stream.readShort();
      const arr = new Int16Array(n);
      for (let j = 0; j < n; j++) arr[j] = stream.readShort();
      groups[i] = arr;
    }
    stream.close();
  } catch (e) {
    groups[0] = null;
    groups[1] = null;
  }
}

export function getResourceGroup(groupId) {
  return groups ? groups[groupId] : null;
}

export function setLanguage(lang) {
  languageIndex = lang;
}

function skipBytes(stream, count) {
  for (let i = 0; i < count; i += stream.skipBytes(count - i)) {
    if (stream.available() <= 0) break;
  }
}

export async function getSpriteGroup(id) {
  await loadGroups();
  const group = getResourceGroup(2);
  group[0] = id;
  return group;
}

async function parseResource(stream, id, length) {
  if (id < 1) {
    const langNames = new Array(6);
    const skips = new Int32Array(6);
    for (let b = 0; b < 6; b++) {
      langNames[b] = stream.readUTF();
      skips[b] = stream.readInt();
    }
    skipBytes(stream, skips[languageIndex]);
    if (resources[0] == null) resources[0] = new Array(233);
    const strings = resources[0];
    for (let b2 = 0; b2 < 233; b2++) {
      if (langFilterFrom === -1 || (b2 >= langFilterFrom && b2 <= langFilterTo)) {
        strings[b2] = stream.readUTF();
      } else {
        stream.readUTF();
      }
      if (langFilterTo !== -1 && b2 > langFilterTo) break;
    }
    langFilterFrom = -1;
    langFilterTo = -1;
  } else if (id < 58) {
    let i = 0;
    const s1 = stream.readShort();
    const s2 = stream.readShort();
    i = (s2 - s1) * 12 + 4;
    for (let s = s1; s < s2; s++) {
      const row = new Int16Array(7);
      for (let b = 0; b < 6; b++) row[b] = stream.readShort();
      row[6] = id;
      spriteRows[s] = row;
    }
    let name = '';
    for (let b = 0; b < 8; b++) {
      const ch = stream.readByte();
      if (ch !== 0) name += String.fromCharCode(ch);
    }
    i += 8;
    if (name !== '') {
      skipBytes(stream, length - i);
      return name;
    }
    const raw = new Uint8Array(length - i);
    stream.readFully(raw);
    resources[id] = await Image.decodePNG(raw);
  } else {
    const raw = new Uint8Array(length);
    stream.readFully(raw);
    resources[id] = raw;
  }
  return null;
}

export async function loadResources(groupId) {
  await loadGroups();
  const c = await getCatalog();
  const catalogNames = c[1];
  const catalogOffsets = c[0];
  const catalogLengths = c[2];
  const group = getResourceGroup(groupId);
  const results = new Array(group.length);
  const parsedNames = new Array(group.length);
  let langFile = '';
  let stream = null;
  let posInFile = 0;
  try {
    for (let i = 0; i < group.length; i++) {
      const id = group[i];
      if (id < 0 || id > 64) continue;
      if (resources[id] != null && id !== 0) {
        results[i] = resources[id];
        continue;
      }
      const name = catalogNames[id];
      if (name !== langFile) {
        if (stream) stream.close();
        stream = DataInputStream.fromBytes(await loadAssetBytes(name));
        posInFile = 0;
      }
      const skip = catalogOffsets[id] - posInFile;
      skipBytes(stream, skip);
      posInFile += skip;
      parsedNames[i] = await parseResource(stream, id, catalogLengths[id]);
      if (parsedNames[i] == null) results[i] = resources[id];
      posInFile += catalogLengths[id];
      langFile = name;
    }
    if (stream) stream.close();
    for (let i = 0; i < parsedNames.length; i++) {
      if (parsedNames[i] != null) {
        results[i] = await decodePNGResource(parsedNames[i]);
        resources[group[i]] = results[i];
      }
    }
  } catch (e) {
    if (stream) stream.close();
  }
  return results;
}

async function decodePNGResource(name) {
  const bytes = await loadAssetBytes(name);
  return Image.decodePNG(bytes);
}

export async function unloadResource(id) {
  await getSpriteGroup(id);
  await unloadGroup(2);
}

export async function unloadGroup(groupId) {
  await loadGroups();
  const group = getResourceGroup(groupId);
  for (let b = 0; b < group.length; b++) {
    const s = group[b];
    if (s < 58 && s > 0) {
      for (let b1 = 0; b1 < spriteRows.length; b1++) {
        const row = spriteRows[b1];
        if (row != null && row[6] === s) spriteRows[b1] = null;
      }
      resources[s] = null;
    } else {
      resources[s] = null;
    }
  }
}

export async function loadResourceRaw(id) {
  const c = await getCatalog();
  if (resources[id] != null) return resources[id];
  const name = c[1][id];
  const len = c[2][id];
  const stream = DataInputStream.fromBytes(await loadAssetBytes(name));
  skipBytes(stream, c[0][id]);
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = stream.readUnsignedByte();
  stream.close();
  resources[id] = bytes;
  return bytes;
}

export async function loadResourceById(id) {
  const c = await getCatalog();
  if (id <= 0 || (resources[id] != null && id !== 0)) return resources[id];
  const name = c[1][id];
  const stream = DataInputStream.fromBytes(await loadAssetBytes(name));
  skipBytes(stream, c[0][id]);
  let parsed = null;
  try {
    parsed = await parseResource(stream, id, c[2][id]);
  } finally {
    stream.close();
  }
  if (parsed != null) {
    const img = await decodePNGResource(parsed);
    resources[id] = img;
  }
  return resources[id];
}

export function getResource(id) {
  return resources[id];
}

export function getString(id) {
  return resources[0][id];
}

export function getStringFormatted(id, args) {
  let str1 = getString(id);
  let str2 = '';
  let i = 0;
  for (;;) {
    const j = i;
    i = str1.indexOf('%', i);
    if (i === -1) {
      str2 += str1.substring(j, str1.length);
    } else {
      str2 += str1.substring(j, i);
      str2 += args[str1.charCodeAt(i + 1) - 49];
      i += 2;
      continue;
    }
    return str2;
  }
}

export async function getLanguageNames() {
  const c = await getCatalog();
  const name = c[1][0];
  const offset = c[0][0];
  const stream = DataInputStream.fromBytes(await loadAssetBytes(name));
  skipBytes(stream, offset);
  const names = new Array(6);
  for (let i = 0; i < 6; i++) {
    names[i] = stream.readUTF();
    stream.readInt();
  }
  stream.close();
  return names;
}

export function getSpriteData(spriteId, index) {
  const row = spriteRows[spriteId];
  return row ? row[index] : 0;
}

function clipRect(g, x, y, w, h, out) {
  const cx = g.getClipX();
  const cy = g.getClipY();
  const cw = g.getClipWidth();
  const ch = g.getClipHeight();
  out[0] = cx;
  out[1] = cy;
  out[2] = cw;
  out[3] = ch;
  if (x < cx) {
    w -= cx - x;
    x = cx;
  }
  if (y < cy) {
    h -= cy - y;
    y = cy;
  }
  if (x + w > cx + cw) w = cx + cw - x;
  if (y + h > cy + ch) h = cy + ch - y;
  if (w > 0 && h > 0) {
    g.setClip(x, y, w, h);
    return true;
  }
  return false;
}

export function drawSprite(spriteId, x, y, g) {
  const row = spriteRows[spriteId];
  if (row == null) {
    _missRow(spriteId);
    if (_dbgDraw % 144 === 0) _flushMisses();
    return;
  }
  const image = getResource(row[6]);
  if (image == null) {
    _missImg(spriteId, row);
    if (_dbgDraw % 144 === 0) _flushMisses();
    return;
  }
  dbgDraw('sprite', { id: spriteId, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, ox: row[0], oy: row[1], w: row[2], h: row[3], ax: row[4], ay: row[5], res: row[6] });
  if (clipRect(g, x - row[4], y - row[5], row[2], row[3], clipRectTemp)) {
    g.drawImage(image, x - row[4] - row[0], y - row[5] - row[1], 20);
    g.setClip(clipRectTemp[0], clipRectTemp[1], clipRectTemp[2], clipRectTemp[3]);
  }
}

export function drawFrame(x, y, w, h, g) {
  g.setColor(0x666666);
  g.drawRect(x, y, w - 1, h - 1);
  g.setColor(0x333333);
  g.drawRect(x + 1, y + 1, w - 3, h - 3);
}
