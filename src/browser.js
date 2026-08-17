import { Display } from './j2me/Display.js';
import * as m from './game/m.js';
import { Screen } from './game/p.js';

const KEY_MAP = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  Enter: 13,
  Backspace: 8,
  Escape: 27,
  ' ': 32,
  '0': 48, '1': 49, '2': 50, '3': 51, '4': 52,
  '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
  '*': 42, '#': 35,
};

if (typeof document !== 'undefined') {
  const canvas = document.getElementById('screen');
  if (canvas) {
    canvas.width = 176;
    canvas.height = 208;
    canvas.style.imageRendering = 'pixelated';

    canvas.tabIndex = 0;
    canvas.focus();

    document.addEventListener('keydown', (e) => {
      const action = KEY_MAP[e.key];
      if (action != null) {
        e.preventDefault();
        const c = Display.getCanvas();
        if (c) c.keyPressed(action);
      }
    });

    document.addEventListener('keyup', (e) => {
      const action = KEY_MAP[e.key];
      if (action != null) {
        const c = Display.getCanvas();
        if (c) c.keyReleased(action);
      }
    });

    m.setCanvasElement(canvas);
    m.setLifecycleState(1);
  }
}
