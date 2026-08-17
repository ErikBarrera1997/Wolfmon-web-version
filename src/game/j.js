import { Screen, SCREEN_W, SCREEN_H } from './p.js';
import { Font } from '../j2me/Font.js';
import { DataInputStream } from '../j2me/DataInputStream.js';
import * as c from '../resources/c.js';
import * as m from './m.js';
import { e } from './e.js';
import { k } from './k.js';

let engine = null;
let selArr = new Int32Array(9);
let scrollArr = new Int32Array(9);
let upArrowId = -1;
let downArrowId = -1;

export function initArrays() {
  selArr = new Int32Array(9);
  scrollArr = new Int32Array(9);
}

export function setEngine(h) {
  engine = h;
}

export function setUpArrow(id) { upArrowId = id; }
export function setDownArrow(id) { downArrowId = id; }

export function createMenu(menuIdx) {
  const defaultSel = selArr[menuIdx];
  const stream = m.createMenuStream();
  if (!stream) return null;
  try {
    stream.readInt();
    let menu = null;
    for (let i = 0; i <= menuIdx; i++) {
      const isTarget = i === menuIdx;
      const titleId = stream.readShort();
      const flags = stream.readShort();
      stream.readInt();

      if (isTarget) {
        menu = new j(c.getString(titleId), flags);
        menu.menuIdx = menuIdx;
      }

      const itemDefCount = stream.readInt();
      for (let di = 0; di < itemDefCount; di++) {
        const itemType = stream.readByte();
        const strId = stream.readShort();
        const val1 = stream.readShort();
        const val2 = stream.readShort();
        if (isTarget) {
          menu.setItem(itemType - 1, c.getString(strId), val1, val2);
        }
      }

      const groupCount = stream.readShort();
      for (let gi = 0; gi < groupCount; gi++) {
        const grpType = stream.readByte();
        const itemCount = grpType === 2 ? stream.readShort() : 1;
        const items = new Array(itemCount);
        for (let ii = 0; ii < itemCount; ii++) {
          const strId = stream.readShort();
          const w = stream.readShort();
          const flags = stream.readInt();
          if (isTarget) {
            const iconIds = w !== -1 ? [w] : null;
            items[ii] = new e(c.getString(strId), menu.itemMarginLeft, flags, iconIds);
          }
        }
        const scrollId = stream.readShort();
        const groupId = grpType !== 2 ? stream.readShort() : -1;
        if (isTarget) {
          menu.addItems(items, grpType, scrollId, groupId);
        }
      }
    }
    stream.close();
    menu.selectItem(defaultSel);
    if (engine) engine.populateMenu(menu, menuIdx);
    return menu;
  } catch (_e) {
    return null;
  }
}

export class j extends Screen {
  constructor(title, flags) {
    super();
    this.menuIdx = -1;
    this.titleTextWidth = 0;
    this.titleSpriteId = 0;
    this.titleScrollTimer = 0;
    this.titleScrollOffset = 0;
    this.titleScrollDir = 1;
    this.titleFont = Font.getFont(64, 1, 0);
    this.softKeyTypes = new Int32Array(2);
    this.softKeyValues = new Int32Array(2);
    this.softKeyLabels = new Array(2);
    this.softKeyEnabled = new BooleanArray(2);
    this.groups = new Array();
    this.selectedIndex = -1;
    this.scrollY = 0;
    this.pendingSeq = -1;
    this.titleVisible = false;
    this.barVisible = false;
    this.marginX = 5;
    this.contentTop = 0;
    this.contentWidth = 0;
    this.contentHeight = 0;
    this.headerY = 0;
    this.headerH = 60;
    this.bottomBarH = 0;
    this.itemMarginLeft = 0;
    this.setTitle(title, flags);
  }

  _computeLayout() {
    const font = Font.getFont(32, 0, 0);
    this.bottomBarH = font.getHeight() + 4;
    this.headerH = 60;
    this.headerY = 0;
    this.marginX = 5;
    this.contentTop = 11 + this.headerY + this.headerH;
    this.contentWidth = -5;
    if (this.contentWidth < 0) this.contentWidth = SCREEN_W - this.marginX + this.contentWidth;
    this.contentHeight = -11;
    if (this.contentHeight < 0) this.contentHeight = SCREEN_H - this.bottomBarH - this.contentTop + this.contentHeight;
    this.itemMarginLeft = this.contentWidth - 4;
  }

  addItems(items, type, id1, id2) {
    const group = new k();
    group.items = items;
    group.type = type;
    group.eventId = id1;
    group.eventValue = id2;
    this.groups.push(group);
    const idx = this.groups.length - 1;
    if (this.selectedIndex === -1) this.selectItem(idx);
    return idx;
  }

  addItem(item) {
    return this.addItems([item], 0, -1, -1);
  }

  addItem(item, eventId) {
    return this.addItems([item], 1, eventId, -1);
  }

  removeItem(idx) {
    if (this.selectedIndex === idx) {
      if (this.groups.length === 1) {
        this.selectItem(-1);
      } else {
        this.selectItem(this._prevEnabled(this.selectedIndex));
        if (this.selectedIndex === -1) this.selectItem(this._nextEnabled(this.selectedIndex));
      }
    }
    this.groups.splice(idx, 1);
    if (this.selectedIndex !== -1) {
      if (this.selectedIndex > idx) this.selectItem(this.selectedIndex - 1);
      else this._clampScroll();
    }
  }

  selectItem(idx) {
    if (idx !== -1) {
      if (this._isEnabled(idx)) {
        this.selectedIndex = idx;
        if (this.menuIdx !== -1) selArr[this.menuIdx] = idx;
      }
    } else {
      this.selectedIndex = -1;
    }
    this._clampScroll();
  }

  setTitle(text, flags) {
    this.titleFont.stringWidth('x');
    this.titleText = text;
    this.titleTextWidth = this.titleFont.stringWidth(this.titleText);
    this.titleSpriteId = flags;
    this._computeLayout();
  }

  setItem(idx, text, val1, val2) {
    this.softKeyTypes[idx] = val1;
    this.softKeyValues[idx] = val2;
    this.softKeyLabels[idx] = text;
    this.softKeyEnabled[idx] = true;
    this.a[idx] = text;
  }

  setItemText(idx, text) {
    const group = this.groups[idx];
    const old = group.items[0];
    group.items[0] = new e(text, old.width, old.flags, old.iconSprites);
  }

  isItemEnabled(idx) {
    return idx < 0 || idx >= this.groups.length ? false : (this.groups[idx].enabled !== 0);
  }

  getItemId(idx) {
    return this.groups[idx].eventValue;
  }

  setItemValue(idx, val) {
    this.groups[idx].eventValue = val;
  }

  _isEnabled(idx) {
    return idx >= 0 && idx < this.groups.length && this.groups[idx].enabled !== 0;
  }

  _prevEnabled(idx) {
    for (let i = idx - 1; i >= 0; i--) {
      if (this._isEnabled(i)) return i;
    }
    return -1;
  }

  _nextEnabled(idx) {
    for (let i = idx + 1; i < this.groups.length; i++) {
      if (this._isEnabled(i)) return i;
    }
    return -1;
  }

  _itemsHeightBefore(idx) {
    let h = 0;
    for (let i = 0; i < idx; i++) {
      h += this._itemHeight(this.groups[i]) + 2;
    }
    return h;
  }

  _itemTop(idx) {
    return this._itemsHeightBefore(idx) + this._itemHeight(this.groups[idx]);
  }

  _itemHeight(grp) {
    return grp.items[grp.currentIdx].totalH + 4;
  }

  _scrollToSelection() {
    if (this.groups.length === 0) return;
    const prev = this._prevEnabled(this.selectedIndex);
    let y = this.scrollY;
    if (prev === -1) {
      y -= 20;
    } else {
      const prevH = this._itemsHeightBefore(prev);
      const prevTop = this._itemTop(prev);
      if (y > prevH) {
        this.selectItem(prev);
      } else if (prevTop > y + this.contentHeight - 20) {
        this.selectItem(prev);
        y = this.scrollY;
      } else {
        y -= 20;
      }
    }
    if (y < 0) y = 0;
    this.scrollY = y;
  }

  _scrollDown() {
    if (this.groups.length === 0) return;
    const next = this._nextEnabled(this.selectedIndex);
    let y = this.scrollY;
    if (next === -1) {
      y += 20;
    } else {
      const nextH = this._itemsHeightBefore(next);
      const nextTop = this._itemTop(next);
      if (y + this.contentHeight < nextTop) {
        this.selectItem(next);
      } else if (nextH < y + this.contentHeight + 20) {
        this.selectItem(next);
        y = this.scrollY;
      } else {
        y += 20;
      }
    }
    const lastTop = this._itemTop(this.groups.length - 1);
    if (lastTop <= this.contentHeight) {
      y = 0;
    } else if (y > lastTop - this.contentHeight) {
      y = lastTop - this.contentHeight;
    }
    this.scrollY = y;
  }

  _clampScroll() {
    if (this.selectedIndex === -1) return;
    const top = this._itemsHeightBefore(this.selectedIndex);
    const bottom = this._itemTop(this.selectedIndex);
    if (top < this.scrollY) {
      this.scrollY = top;
    } else if (bottom > this.scrollY + this.contentHeight) {
      this.scrollY = bottom - this.contentHeight;
    }
    if (this.menuIdx !== -1) scrollArr[this.menuIdx] = this.scrollY;
  }

  _d() {
    return true;
  }

  keyPressed(action) {
    if (!this._d()) return;
    let group = this.selectedIndex !== -1 ? this.groups[this.selectedIndex] : null;
    if (group && !group.enabled) group = null;
    const groupId = group ? group.type : -1;
    let evType = -1;
    let evVal = -1;

    switch (action) {
      case 5:
      case 7: {
        if (!group) break;
        if (groupId === 2) {
          group.eventValue = group.currentIdx;
          evType = group.eventId;
          evVal = group.eventValue;
          console.log(`[Audio] Toggle Enter: opción="${group.items[group.currentIdx].lines[0]}", index=${group.currentIdx}, eventId=${evType}, eventValue=${evVal}`);
        } else {
          const skIdx = this._softKeyIdx;
          if (this.softKeyEnabled[skIdx] && this.softKeyTypes[skIdx]) {
            evType = this.softKeyTypes[skIdx];
            evVal = this.softKeyValues[skIdx];
          } else {
            evType = group.eventId;
            evVal = group.eventValue;
          }
        }
        break;
      }
      case 6:
      case 31: {
        if (this.softKeyEnabled[1] && this.softKeyTypes[1]) {
          evType = this.softKeyTypes[1];
          evVal = this.softKeyValues[1];
        } else if (this.menuIdx > 0) {
          const screen = createMenu(this.menuIdx - 1);
          m.setNextScreen(screen);
          return;
        }
        break;
      }
      case 3: {
        if (groupId === 2 && group) {
          group.currentIdx--;
          if (group.currentIdx < 0) group.currentIdx = group.items.length - 1;
        } else {
          const prev = this._prevEnabled(this.selectedIndex);
          if (prev !== -1) this.selectItem(prev);
        }
        break;
      }
      case 4: {
        if (groupId === 2 && group) {
          group.currentIdx++;
          if (group.currentIdx >= group.items.length) group.currentIdx = 0;
        } else {
          const next = this._nextEnabled(this.selectedIndex);
          if (next !== -1) this.selectItem(next);
        }
        break;
      }
      case 1: {
        if (groupId === 2 && group) {
          group.currentIdx--;
          if (group.currentIdx < 0) group.currentIdx = group.items.length - 1;
        } else {
          if (this.softKeyEnabled[0] && this.softKeyEnabled[1]) {
            this._softKeyIdx = 0;
          }
        }
        break;
      }
      case 2: {
        if (groupId === 2 && group) {
          group.currentIdx++;
          if (group.currentIdx >= group.items.length) group.currentIdx = 0;
        } else {
          if (this.softKeyEnabled[0] && this.softKeyEnabled[1]) {
            this._softKeyIdx = 1;
          }
        }
        break;
      }
    }

    if (evType !== -1) {
      if (evType === 1) {
        const screen = createMenu(evVal);
        m.setNextScreen(screen);
        return;
      }
      this.pendingSeq = m.postEvent(evType, this);
    }
  }

  charTyped() {
    throw new Error('Unsupported operation');
  }

  update(dt) {
    if (this.selectedIndex !== -1) {
      const _group = this.groups[this.selectedIndex];
    }
    let titleOffset = this.titleSpriteId !== -1
      ? c.getSpriteData(this.titleSpriteId, 2) + 2
      : 0;
    const totalW = SCREEN_W - 4;
    const textW = totalW - titleOffset;
    if (this.titleTextWidth > textW) {
      if (this.titleScrollTimer >= 3000) {
        if (this.titleScrollDir > 0) {
          this.titleScrollOffset = ((this.titleScrollTimer - 3000) * 20) / 1000;
          if (this.titleScrollOffset > this.titleTextWidth - textW) {
            this.titleScrollOffset = this.titleTextWidth - textW;
            this.titleScrollTimer = 0;
            this.titleScrollDir = -1;
          }
        } else {
          this.titleScrollOffset = this.titleTextWidth - textW - ((this.titleScrollTimer - 3000) * 20) / 1000;
          if (this.titleScrollOffset <= 0) {
            this.titleScrollOffset = 0;
            this.titleScrollTimer = 0;
            this.titleScrollDir = 1;
          }
        }
      }
      this.titleScrollTimer += dt;
    }
  }

  paintScreen(g) {
    g.setColor(0);
    g.fillRect(0, 0, SCREEN_W, SCREEN_H);

    if (engine) engine.paintGauge(g, this.menuIdx);

    if (this.titleVisible) {
      g.setColor(0x444324);
      g.fillRect(0, 0, SCREEN_W, this.headerH);
    }

    let titleH = 0;
    if (this.titleSpriteId !== -1) {
      titleH = c.getSpriteData(this.titleSpriteId, 2) + 2;
      c.drawSprite(
        this.titleSpriteId,
        2 + c.getSpriteData(this.titleSpriteId, 4),
        this.headerY + 2 + c.getSpriteData(this.titleSpriteId, 5),
        g,
      );
    }

    const contentW = SCREEN_W - 4;
    g.setFont(this.titleFont);
    g.setClip(2, this.headerY, contentW, this.headerH - titleH);

    if (this.titleTextWidth > contentW && this.titleSpriteId !== -1) {
      g.setColor(0);
      g.drawString(this.titleText, 2 + 1 - this.titleScrollOffset, this.headerY + 2 + 1, 20);
      g.setColor(0xffffff);
      g.drawString(this.titleText, 2 - this.titleScrollOffset, this.headerY + 2, 20);
    } else {
      g.setColor(0);
      g.drawString(this.titleText, (SCREEN_W >> 1) + 1, this.headerY + 2 + 1, 17);
      g.setColor(0xffffff);
      g.drawString(this.titleText, SCREEN_W >> 1, this.headerY + 2, 17);
    }
    g.setClip(0, 0, SCREEN_W, SCREEN_H);

    if (this.barVisible) {
      g.setColor(0xff7800);
      g.fillRect(0, SCREEN_H - this.bottomBarH, SCREEN_W, this.bottomBarH);
    }

    if (upArrowId !== -1 && this.scrollY > 0) {
      const ax = this.marginX + (this.contentWidth >> 1);
      const ay = this.contentTop - 2;
      c.drawSprite(upArrowId, ax, ay, g);
    }

    if (downArrowId !== -1 && this.groups.length > 0) {
      if (this.scrollY < this._itemTop(this.groups.length - 1) - this.contentHeight) {
        const ax = this.marginX + (this.contentWidth >> 1);
        const ay = this.contentTop + this.contentHeight + 2;
        c.drawSprite(downArrowId, ax, ay, g);
      }
    }

    g.setClip(this.marginX, this.contentTop, this.contentWidth, this.contentHeight);

    for (let i = 0; i < this.groups.length; i++) {
      const grp = this.groups[i];
      const grpTop = this._itemsHeightBefore(i);
      if (grpTop + this.contentHeight < this.scrollY) break;
      const grpH = this._itemHeight(grp);
      const grpBottom = grpTop + grpH;
      if (grpBottom < this.scrollY) continue;

      const dx = this.marginX;
      const dy = this.contentTop + grpTop - this.scrollY;

      let color = i === this.selectedIndex ? 0xffffff : 0x8d8303;

      g.setColor(0);
      grp.items[grp.currentIdx].visible = false;
      grp.items[grp.currentIdx].draw(g, dx + 2 + 1, dy + 2 + 1);

      g.setColor(color);
      grp.items[grp.currentIdx].visible = true;
      grp.items[grp.currentIdx].draw(g, dx + 2, dy + 2);
    }
  }
}

function BooleanArray(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) arr[i] = false;
  return arr;
}
