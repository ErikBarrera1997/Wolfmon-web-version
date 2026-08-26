import { Screen, SCREEN_W, SCREEN_H } from './p.js';
import * as c from './c.js';
import * as m from './m.js';
import { e } from './e.js';
import { b, getRowHeight } from './b.js';

function getString(id) {
  try {
    return c.getString(id) ?? '';
  } catch (_error) {
    return '';
  }
}

export class d extends Screen {
  static aMenuWidth = Math.floor(SCREEN_W * 85 / 100);
  static aLocationSpriteIds = new Int16Array([-1, 53, 54, 55, 56, 57, 58, 59, -1, -1, 22, 23, 24, 25, 43, 26, 27, 28, 29, 30, 31, 32]);
  static bLocationMessages = new Int32Array([-1, 124, 68, 143, 128, 169, 167, 176, 37, 151]);

  constructor() {
    super();
    this.scene = 0;
    this.transitionFrame = 0;
    this.transitionTime = 0;
    this.transitionActive = false;
    this.transitionReverse = false;
    this.locationSprite = -1;
    this.spriteHeight = 0;
    this.textOffsetY = 0;
    this.textAreaHeight = 0;
    this.message = null;
    this.list = null;
    this.sceneNeedsLoad = false;
    this.isContinueMode = false;
  }

  showContinueGameMenu() {
    this.isContinueMode = true;
    this.scene = 1;
    this.locationSprite = -1;
    this.spriteHeight = 0;
    this.setTitle('', 0);
    this.setTitle(getString(2), 1);
    this.sceneNeedsLoad = true;
    this.beginSceneTransition(false);
  }

  showNewGameMenu() {
    this.isContinueMode = false;
    this.scene = 1;
    this.locationSprite = -1;
    this.spriteHeight = 0;
    this.setTitle(getString(3), 0);
    this.setTitle(getString(33), 1);
    this.sceneNeedsLoad = true;
    this.beginSceneTransition(false);
  }

  beginSceneTransition(reverse) {
    this.transitionFrame = 0;
    this.transitionTime = 0;
    this.transitionActive = true;
    this.transitionReverse = Boolean(reverse);
  }

  update(deltaMs) {
    if (this.sceneNeedsLoad) {
      this.loadScene(this.scene);
      this.sceneNeedsLoad = false;
    }

    if (this.transitionActive) {
      this.transitionTime += deltaMs;
      while (this.transitionTime >= 50 && this.transitionFrame < 6) {
        this.transitionTime -= 50;
        this.transitionFrame++;
      }
      if (this.transitionFrame >= 6) {
        this.transitionActive = false;
        this.transitionFrame = 0;
        this.advanceScene();
      }
    }
  }

  advanceScene() {
    if (this.scene >= 1 && this.scene <= 7) {
      this.scene++;
      if (this.scene > 7) {
        m.postEvent(25, null);
        return;
      }
      this.sceneNeedsLoad = true;
      this.beginSceneTransition(false);
    }
  }

  loadScene(scene) {
    if (scene >= 0 && scene < d.aLocationSpriteIds.length) {
      this.locationSprite = d.aLocationSpriteIds[scene];
    } else {
      this.locationSprite = -1;
    }

    if (this.locationSprite >= 0) {
      try { this.spriteHeight = c.getSpriteData(this.locationSprite, 3); } catch (_e) { this.spriteHeight = 0; }
    } else {
      this.spriteHeight = 0;
    }

    if (scene >= 0 && scene < d.bLocationMessages.length) {
      const msgId = d.bLocationMessages[scene];
      if (msgId >= 0) {
        this.showMessage(msgId);
        return;
      }
    }
    this.list = null;
  }

  showMessage(messageId) {
    const text = getString(messageId);
    const item = new e(text ?? '', SCREEN_W - 20, 2);
    this.message = item;
    this.textAreaHeight = item.totalH ?? item.c ?? 0;

    if (this.locationSprite >= 0 && this.spriteHeight > 0) {
      const availH = SCREEN_H - this.spriteHeight - getRowHeight();
      this.textOffsetY = this.spriteHeight;
      this.list = new b([item], availH > 0 ? availH : SCREEN_H - getRowHeight() * 2, null, null);
    } else {
      this.textOffsetY = Math.max(0, (SCREEN_H - this.textAreaHeight) >> 1);
      this.list = new b([item], SCREEN_H - getRowHeight() * 2, null, null);
    }
  }

  paintScreen(graphics) {
    graphics.setColor(0);
    graphics.fillRect(0, 0, SCREEN_W, SCREEN_H);

    if (this.locationSprite >= 0) {
      const y = this.spriteHeight > 0 ? this.spriteHeight : (SCREEN_H >> 1);
      try { c.drawSprite(this.locationSprite, SCREEN_W >> 1, y, graphics); } catch (_e) {}
    }

    if (this.list) {
      graphics.setColor(13421772);
      const listX = ((SCREEN_W - this.list._contentW) >> 1);
      const listY = this.textOffsetY;
      try { this.list.drawArrows(graphics, listX, listY); } catch (_e) {}
    }

    this.paintFogOverlay(graphics);
  }

  paintFogOverlay(graphics) {
    if (!this.transitionActive || this.transitionFrame <= 0 || this.transitionFrame >= 6) return;
    const cols = Math.floor(SCREEN_W / 16) + 1;
    const rows = Math.floor(SCREEN_H / 16) + 1;
    const size = this.transitionFrame * 4;
    graphics.setColor(0);
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        graphics.fillRect(x * 16, y * 16, size, size);
      }
    }
  }

  keyPressed(keyCode) {
    if (this.transitionActive) return;
    if (keyCode === 1) this.list?.scrollDown?.();
    else if (keyCode === 2) this.list?.scrollUp?.();
    else if (keyCode === 5 || keyCode === 7 || keyCode === 15) {
      if (this.scene >= 7) {
        this.scene = 8;
        m.postEvent(25, null);
      } else {
        this.beginSceneTransition(true);
      }
    }
  }

  resetScreen() {
    this.scene = 0;
    this.transitionFrame = 0;
    this.transitionTime = 0;
    this.transitionActive = false;
    this.message = null;
    this.list = null;
    this.locationSprite = -1;
    this.setTitle(getString(3), 0);
    this.setTitle('', 1);
  }
}

export default d;
