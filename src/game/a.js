import { Screen, SCREEN_W, SCREEN_H } from './p.js';
import * as c from '../resources/c.js';
import * as m from './m.js';
import { e } from './e.js';

export class a extends Screen {
  static createWaitScreen(spriteId) {
    const s = new a();
    s._spriteId = spriteId;
    s._isWait = true;
    return s;
  }

  static createProgressScreen(spriteId, bgColor) {
    const s = new a();
    s._spriteId = spriteId;
    s._isWait = true;
    s._bgColor = bgColor;
    return s;
  }

  constructor() {
    super();
    this._elapsed = 0;
    this._firstPaint = true;
    this._isWait = false;
    this._progress = 100;
    this._gaugeVal = 0;
    this._gaugeDir = 1;
    this._gaugeStart = 0;
    this.a = 0;
    this.a = false;
    this._timerMax = -1;
    this._event = -1;
    this._spriteId = -1;
    this._bgColor = 0;
    this._textItem = null;
    this.j = -1;
    this.k = -1;
    this.l = 0;
  }

  setTimer(ms) {
    this._elapsed = 0;
    this._gaugeStart = this._elapsed;
    this._timerMax = ms;
  }

  reset() {
    this._elapsed = 0;
    this._gaugeStart = this._elapsed;
    this._firstPaint = true;
  }

  keyPressed(_action) {
    if (this._event !== -1 && this._event != null) {
      m.postEvent(this._event, this);
    }
  }

  update(dt) {
    this._elapsed += dt;
    if (this._event !== -1 && this._timerMax !== -1 && this._elapsed > this._timerMax) {
      m.postEvent(this._event, this);
    }
    if (this._isWait && this._gaugeDir !== 0) {
      if (this._elapsed - this._gaugeStart >= 4000) {
        this._gaugeStart = this._elapsed;
        this._gaugeDir = -this._gaugeDir;
      }
      this._gaugeVal = (this._progress * (this._elapsed - this._gaugeStart)) / 4000;
      if (this._gaugeDir < 0) {
        this._gaugeVal = this._progress - this._gaugeVal;
      }
    }
  }

  paintScreen(g) {
    let totalH = -4;
    if (this._spriteId !== -1) {
      totalH = -4 + c.getSpriteData(this._spriteId, 3) + 4;
    }
    if (this._textItem != null) {
      totalH += this._textItem.totalH + 4;
    }
    if (this._isWait) {
      totalH += 12;
    }
    let y = (SCREEN_H - totalH) >> 1;

    if (this._firstPaint) {
      g.setColor(this._bgColor);
      g.setClip(0, 0, SCREEN_W << 1, SCREEN_H << 1);
      g.fillRect(0, 0, SCREEN_W << 1, SCREEN_H << 1);
    }

    if (this._spriteId !== -1) {
      if (this._firstPaint) {
        c.drawSprite(
          this._spriteId,
          ((SCREEN_W - c.getSpriteData(this._spriteId, 2)) >> 1) + c.getSpriteData(this._spriteId, 4),
          y + c.getSpriteData(this._spriteId, 5),
          g,
        );
      }
      y += c.getSpriteData(this._spriteId, 3) + 4;
    }

    if (this._textItem != null) {
      if (this._firstPaint) {
        g.setColor(0);
        this._textItem.draw(g, 0, y);
      }
      y += this._textItem.totalH + 4;
    }

    if (this._isWait) {
      const barX = (SCREEN_W >> 1) - 50;
      const fillW = (((this._gaugeVal << 8) / this._progress * 100) >> 8) - 4;
      g.setClip(barX, y, 100, 8);
      g.setColor(0);
      g.drawRect(barX, y, 99, 7);
      g.setColor(0xe3e3e0);
      g.fillRect(barX + 1, y + 1, 98, 6);
      g.setClip(barX + 2, y, 96, 8);
      g.setColor(0x638c42);
      if (this._gaugeDir !== 0) {
        g.fillRect(barX - 4 + fillW, y + 2, 8, 4);
      } else {
        g.fillRect(barX + 2, y + 2, fillW, 4);
      }
    }

    this._firstPaint = false;
  }
}
