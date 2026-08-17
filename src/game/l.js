import * as c from '../resources/c.js';
import { initArrays } from './j.js';
import { h } from './h.js';

export function initResources() {
  c.init();
  initArrays();
}

export function createGameEngine() {
  return new h();
}
