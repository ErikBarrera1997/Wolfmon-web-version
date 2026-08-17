import { Screen, SCREEN_W, SCREEN_H } from './p.js';
import { Font } from '../j2me/Font.js';
import * as c from '../resources/c.js';
import * as m from './m.js';

export function getRowHeight() {
  const font = Font.getFont(32, 0, 0);
  return font.getHeight() + 4;
}

export class b extends Screen {
  constructor(items, height, nextScreen, titleString) {
    super();
    this._items = items;
    this._nextScreen = nextScreen;
    this._scrollY = 0;
    this._firstPaint = false;

    let maxW = 0;
    for (let i = 0; i < items.length; i++) {
      if (maxW < items[i].width) maxW = items[i].width;
    }
    let totalH = 0;
    for (let i = 0; i < items.length; i++) {
      totalH += items[i].totalH + 2;
    }
    totalH -= 2;

    const rowH = getRowHeight();
    if (height + 8 > SCREEN_H - rowH * 2) {
      height = SCREEN_H - rowH * 2 - 8;
    }

    this._h = 0;
    this._contentH = height;
    this._maxScroll = 0;

    const upH = this._upArrowId !== -1 ? (c.getSpriteData(this._upArrowId, 3) + 2) : 0;
    const dnH = this._dnArrowId !== -1 ? (c.getSpriteData(this._dnArrowId, 3) + 2) : 0;
    this._contentW = maxW;

    if (totalH > this._contentH) {
      this._h += upH;
      this._contentH -= upH + dnH;
      this._maxScroll = totalH - this._contentH;
    }

    this._hasTitle = false;
    if (titleString != null) {
      this.a[0] = titleString;
      this._hasTitle = true;
    }
  }

  scrollDown() {
    const h = Font.getFont(64, 0, 8).getHeight();
    if (this._scrollY + h > this._maxScroll) {
      this._scrollY = this._maxScroll;
    } else {
      this._scrollY += h;
    }
  }

  scrollUp() {
    const h = Font.getFont(64, 0, 8).getHeight();
    if (this._scrollY - h < 0) {
      this._scrollY = 0;
    } else {
      this._scrollY -= h;
    }
  }

  drawArrows(g, x, y) {
    g.setClip(x, y, this._contentW, this._contentH);

    if (this._maxScroll > 0) {
      if (this._upArrowId !== -1 && this._scrollY > 0) {
        const ax = x + (this._contentW >> 1) + (c.getSpriteData(this._upArrowId, 4) + (c.getSpriteData(this._upArrowId, 2) >> 1));
        const ay = y + c.getSpriteData(this._upArrowId, 5);
        c.drawSprite(this._upArrowId, ax, ay, g);
      }
      if (this._dnArrowId !== -1 && this._scrollY < this._maxScroll) {
        const ax = x + (this._contentW >> 1) + (c.getSpriteData(this._dnArrowId, 4) + (c.getSpriteData(this._dnArrowId, 2) >> 1));
        const ay = y + this._contentH + c.getSpriteData(this._dnArrowId, 5) - c.getSpriteData(this._dnArrowId, 3);
        c.drawSprite(this._dnArrowId, ax, ay, g);
      }
    }

    g.setClip(x, y + this._h, this._contentW, this._contentH);

    let curY = y + this._h;
    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i];
      let dx = x;
      if (item.flags & 2) {
        dx = x + ((this._contentW - item.width) >> 1);
      }
      item.draw(g, dx, curY - this._scrollY);
      curY += item.totalH + 2;
    }
  }

  paintScreen(g) {
    if (this._nextScreen != null && !this._firstPaint) {
      this._nextScreen.paintScreen(g);
      this._firstPaint = true;
    }

    const x = ((SCREEN_W - this._contentW) >> 1) - 4;
    const y = ((SCREEN_H - this._contentH) >> 1) - 4;
    const w = this._contentW + 8;
    const h = this._contentH + 8;

    g.setClip(x, y, w, h);
    g.setColor(0);
    g.fillRect(x, y, w, h);
    c.drawFrame(x, y, w, h, g);

    g.setColor(0xcccccc);
    this.drawArrows(g, x + 4, y + 4);
  }

  keyPressed(action) {
    switch (action) {
      case 1:
      case 3:
        this.scrollUp();
        return;
      case 2:
      case 4:
        this.scrollDown();
        return;
      case 5:
        if (this._nextScreen != null) {
          this._scrollY = 0;
          m.setNextScreen(this._nextScreen);
        }
        return;
      case 6:
        m.postEvent(20, this);
        return;
    }
  }

  screenEntered() {
    if (this._nextScreen != null) {
      this._scrollY = 0;
    }
  }
}
