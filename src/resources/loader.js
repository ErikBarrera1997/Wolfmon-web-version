import { isBrowser } from '../j2me/environment.js';

const cache = new Map();
let assetRoot = null;

function defaultRoot() {
  return new URL('../../assets/', import.meta.url).href;
}

export function setAssetRoot(root) {
  assetRoot = root;
  cache.clear();
}

export function getAssetRoot() {
  return assetRoot || defaultRoot();
}

async function loadFromFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load asset ${url} (${response.status})`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

async function loadFromDisk(url) {
  const { readFile } = await import('node:fs/promises');
  const { fileURLToPath } = await import('node:url');
  const buffer = await readFile(fileURLToPath(url));
  return new Uint8Array(buffer);
}

export async function loadAssetBytes(name) {
  if (cache.has(name)) return cache.get(name);
  const url = new URL(name, getAssetRoot()).href;
  const bytes = isBrowser() ? await loadFromFetch(url) : await loadFromDisk(url);
  cache.set(name, bytes);
  return bytes;
}

export function getCachedBytes(name) {
  return cache.get(name) || null;
}

export function resetAssetCache() {
  cache.clear();
}
