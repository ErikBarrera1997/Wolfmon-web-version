import { Display } from './j2me/Display.js';
import * as m from './game/m.js';
import { Screen } from './game/p.js';

const KEY_MAP = {
  ArrowUp: 1,
  ArrowDown: 2,
  ArrowRight: 3,
  ArrowLeft: 4,
  Enter: 5,
  Backspace: 6,
  Escape: 6,
  ' ': 7,
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

    canvas.addEventListener('keydown', (e) => {
      e.preventDefault();
      const action = KEY_MAP[e.key];
      if (action != null) {
        const c = Display.getCanvas();
        if (c) c.keyPressed(action);
      }
    });

    canvas.addEventListener('keyup', (e) => {
      const action = KEY_MAP[e.key];
      if (action != null) {
        const c = Display.getCanvas();
        if (c) c.keyReleased(action);
      }
    });

    canvas.tabIndex = 0;
    canvas.focus();

    m.setCanvasElement(canvas);
    m.setLifecycleState(1);
  }
}
