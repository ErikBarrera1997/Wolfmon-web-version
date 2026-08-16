import {
  Graphics,
  Font,
  FACE_MONOSPACE,
  STYLE_BOLD,
  SIZE_SMALL,
  Image,
  RecordStore,
} from './j2me/index.js';
import { Manager } from '../audio/manager.js';

export function drawDemoFrame(g) {
  g.setColor(0x000000);
  g.fillRect(0, 0, g.canvas.width, g.canvas.height);
  g.setColor(0xffffff);
  g.drawRect(4, 4, g.canvas.width - 8, g.canvas.height - 8);
  g.setColor(0xffdd00);
  g.fillRect(24, 24, 40, 16);
  g.drawRect(80, 24, 40, 16);
  g.drawLine(24, 64, 152, 64);
  g.fillArc(24, 84, 40, 28, 0, 90);
  g.drawArc(96, 84, 40, 28, 0, 180);
  g.setFont(Font.getFont(FACE_MONOSPACE, STYLE_BOLD, SIZE_SMALL));
  g.setColor(0xffffff);
  g.drawString('Wolfmoon', g.canvas.width / 2, 136, Graphics.HCENTER | Graphics.TOP);
  g.drawString('J2ME shim OK', g.canvas.width / 2, 160, Graphics.HCENTER | Graphics.TOP);
}

export function recordStoreDemo() {
  const rs = RecordStore.openRecordStore('w', true);
  rs.addRecord(new Uint8Array([7, 8, 9]));
  return Array.from(rs.getRecord(0));
}

export function runDemo(canvas) {
  const g = new Graphics(canvas.getContext('2d'));
  drawDemoFrame(g);
  const bytes = recordStoreDemo();
  const img = Image.createImage(16, 16);
  const off = img.getGraphics();
  off.setColor(0x00ff00);
  off.fillRect(0, 0, 16, 16);
  g.drawImage(img, 24, 120);
  Manager.createPlayer(new Uint8Array(0), 'audio/midi').start();
  const player = Manager.createPlayer(new Uint8Array(0), 'audio/midi');
  player.prefetch();
  player.setLoopCount(2);
  player.start();
  player.stop();
  return { drawnOps: g.ctx.ops ? g.ctx.ops.length : null, recordBytes: bytes };
}

if (typeof document !== 'undefined') {
  const canvas = document.getElementById('screen');
  if (canvas) {
    const result = runDemo(canvas);
    console.log('Wolfmoon shim demo:', result);
  }
}
