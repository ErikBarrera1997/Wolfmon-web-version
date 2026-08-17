import { Font } from '../j2me/Font.js';
import * as c from '../resources/c.js';
import { SCREEN_W } from './p.js';

const BREAK_CHARS = ['\n', ' ', '-'];

export class e {
  constructor(text, width, flags, iconIds) {
    this.visible = true;
    this.iconInlineH = 0;
    this.flags = flags;
    if (flags & 1) {
      this.font = Font.getFont(64, 1, 0);
    } else {
      this.font = Font.getFont(64, 0, 8);
    }
    let iconW = 0;
    if (iconIds) {
      this.iconH = c.getSpriteData(iconIds[0], 3);
      iconW = c.getSpriteData(iconIds[0], 2);
    } else {
      this.iconH = 0;
      iconW = 0;
    }
    if (width <= iconW + 5) {
      this.iconInlineH = this.iconH;
    }
    this.iconSprites = iconIds || null;

    const lines = [];
    let pos = 0;
    let lineNum = 0;
    while (pos < text.length) {
      const avail = this.iconInlineH > 0 && lineNum === 0
        ? width - iconW - 5
        : width;
      let bestEnd = -1;
      let bestWidth = 0;
      let curX = 0;
      let segStart = pos;
      for (let ci = 0; ci <= BREAK_CHARS.length; ci++) {
        const ch = ci < BREAK_CHARS.length ? BREAK_CHARS[ci] : null;
        let idx;
        if (ch === null) {
          idx = text.length;
        } else {
          idx = text.indexOf(ch, pos);
          if (idx === -1 || (ci > 0 && idx <= pos)) continue;
          if (ci > 0 && idx > pos) idx++;
        }
        if (idx === pos) {
          if (ci === 0) {
            bestEnd = pos + 1;
            bestWidth = 0;
          }
          break;
        }
        const seg = text.substring(pos, idx);
        const w = this.font.stringWidth(seg);
        if (curX + w <= avail) {
          curX += w;
          bestEnd = idx;
          bestWidth = curX;
        } else {
          if (bestEnd === -1) {
            bestEnd = idx;
            bestWidth = curX;
          }
          break;
        }
      }
      if (bestEnd === -1) {
        bestEnd = text.length;
      }
      if (bestWidth === 0 && bestEnd > pos) {
        let buf = '';
        let i = pos;
        while (i < text.length && this.font.stringWidth(buf) < avail) {
          buf += text[i];
          i++;
        }
        if (i > pos + 1) i--;
        bestEnd = i;
      }
      lines.push(text.substring(pos, bestEnd));
      pos = bestEnd;
      if (pos < text.length && text[pos - 1] === '\n') {
      } else if (pos < text.length && text[pos - 1] === ' ') {
      }
      lineNum++;
    }
    this.lines = lines;

    if (this.lines !== null) {
      if (flags & 2) {
        let maxW = 0;
        let h = this.iconInlineH;
        for (let i = 0; i < this.lines.length; i++) {
          const w = this.font.stringWidth(this.lines[i]);
          if (w > maxW) maxW = w;
          h += this.font.getHeight();
        }
        this.iconX = maxW > 0 ? (width - maxW - iconW - 5) >> 1 : (width - iconW - 5) >> 1;
      } else {
        this.iconX = 0;
      }
      this.textX = this.iconX + iconW + 5;
      if (this.iconSprites !== null) {
        this.iconX += c.getSpriteData(this.iconSprites[0], 4);
        this.iconY = c.getSpriteData(this.iconSprites[0], 5);
      }
    } else {
      this.iconX = 0;
      this.iconY = 0;
      this.textX = 0;
    }
    this.width = width;
    this.totalH = Math.max(
      this.lines.length * this.font.getHeight() + this.iconInlineH,
      this.iconH,
    );
  }

  draw(g, x, y) {
    g.setFont(this.font);
    const n = this.lines.length;
    let yy = this.iconInlineH;
    for (let i = 0; i < n; i++) {
      const clipped = yy < this.iconH;
      if ((this.flags & 2) === 2 && !clipped) {
        g.drawString(
          this.lines[i],
          x + (this.width >> 1),
          y + yy,
          17,
        );
      } else {
        g.drawString(
          this.lines[i],
          x + (clipped ? this.textX : 0),
          y + yy,
          20,
        );
      }
      yy += this.font.getHeight();
    }
    if (this.iconSprites !== null && this.visible) {
      c.drawSprite(this.iconSprites[0], x + this.iconX, y + this.iconY, g);
    }
  }
}
