import { Screen, SCREEN_W, SCREEN_H } from './p.js';
import * as c from '../resources/c.js';
import * as m from './m.js';

const STEP_TARGETS = [SCREEN_W / 3 + 10, (SCREEN_W / 3) * 2 - 10, (SCREEN_W >> 1) - 10, SCREEN_W >> 1];

export class g extends Screen {
  static createTransition(color) {
    const s = new g();
    s._color = color;
    return s;
  }

  constructor() {
    super();
    this._elapsed = 0;
    this._duration = -1;
    this._event = -1;
    this._acceptInput = false;
    this._step = 0;
    this._x = SCREEN_W + (SCREEN_W >> 1);
    this._dir = 0;
    this._done = false;
    this._color = 0;
  }

  setDuration(ms) {
    this._elapsed = 0;
    this._duration = ms;
  }

  reset() {
    this._elapsed = 0;
  }

  keyPressed(_action) {
    if (this._event !== -1 && this._acceptInput) {
      m.postEvent(this._event, this);
    }
  }

  update(dt) {
    this._elapsed += dt;
    if (this._event !== -1 && this._duration !== -1 && this._elapsed > this._duration) {
      m.postEvent(this._event, this);
    }
    let speed = (dt * SCREEN_W) / 120;
    if (speed < 1) speed = 1;
    if (this._step <= STEP_TARGETS.length - 1) {
      if (this._dir === 0) {
        this._x -= speed;
      } else {
        this._x += speed;
      }
      if (this._dir === 0) {
        if (this._x <= STEP_TARGETS[this._step]) {
          this._dir = 1;
          this._step++;
        }
      } else if (this._x >= STEP_TARGETS[this._step]) {
        this._dir = 0;
        this._step++;
      }
      if (this._step === STEP_TARGETS.length) {
        this._x = SCREEN_W >> 1;
      }
    }
  }

  paintScreen(g) {
    g.setColor(this._color);
    g.fillRect(0, 0, SCREEN_W, SCREEN_H);
    if (this._step === STEP_TARGETS.length) {
      c.drawSprite(25, this._x, SCREEN_H >> 1, g);
    } else {
      c.drawSprite(24, this._x, SCREEN_H >> 1, g);
    }
  }
}
