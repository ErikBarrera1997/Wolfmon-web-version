import { Screen } from './p.js';

export class i extends Screen {
  static a = null;
  static b = null;
  static c = false;
  static d = 0;
  static e = 0;
  static G = 0;
  static k = null;
  static l = null;
  static a = 0;

  static uByteToInt(b) {
    return b & 0xff;
  }

  static randomInt(min, max, rng) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor() {
    super();
  }

  d() {}
  e() {}
  f() {}
  g() {}
  h() {}

  resetGameState() {}
  loadWorldData() {}
  loadTileData() {}
  playClickSound(_flag) {}
  showNewGameMenu() {}
  showContinueGameMenu() {}
  resetScreen() {}
}
