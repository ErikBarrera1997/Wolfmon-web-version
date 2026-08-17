import { Screen } from './p.js';
import { Display } from '../j2me/Display.js';
import { Canvas } from '../j2me/Canvas.js';
import { RecordStore } from '../j2me/RecordStore.js';
import { DataInputStream } from '../j2me/DataInputStream.js';
import { o } from './o.js';

let midlet = null;
let canvasEl = null;
let canvas = null;
let engine = null;
let currentScreen = null;
let nextScreen = null;
let queue = [];
let seqCounter = 0;
let dispatchSeq = 0;
let states = new Int32Array(5);
let engineState = 0;
let lifecycleState = 0;
let renderRaf = null;
let eventRunning = false;
let destroyed = false;
let cachedMenuBytes = null;

export let _midlet = null;

export function setLifecycleState(state) {
  if (state === 11 || state === 12) {
    if (lifecycleState === 1) return;
  }
  if (state === 3 || state === 2) return;
  switch (state) {
    case 1:
      boot();
      break;
    case 11:
    case 3:
      if (engineState === 3) {
        engineState = 4;
        startResumeThread();
      }
      break;
    case 2:
    case 12:
      if (engineState === 2) {
        engine.dispatchEvent(2, null);
        engineState = 3;
      }
      break;
  }
}

export function postEvent(eventId, obj) {
  seqCounter++;
  queue.push([eventId, seqCounter, obj]);
  return seqCounter;
}

export function isEventProcessed(seq) {
  return seq <= dispatchSeq;
}

export function setNextScreen(screen) {
  nextScreen = screen;
}

export function getCurrentScreen() {
  return currentScreen;
}

export function getEngine() {
  return engine;
}

export function getStates() {
  return states;
}

export function requestDestroy() {
  destroyed = true;
  if (engine) engine.dispatchEvent(4, null);
  stopRenderLoop();
}

export function setCanvasElement(el) {
  canvasEl = el;
}

export function setMidlet(mid) {
  _midlet = mid;
}

export function createMenuStream() {
  if (!cachedMenuBytes) return null;
  return DataInputStream.fromBytes(cachedMenuBytes);
}

async function boot() {
  canvas = new o(canvasEl);
  canvas._currentScreen = null;
  Display.setCurrent(canvas);
  canvas.repaint();
  canvas.serviceRepaints();

  const c = await import('../resources/c.js');
  c.init();
  const { loadAssetBytes } = await import('../resources/loader.js');
  cachedMenuBytes = await loadAssetBytes('m');

  const jMod = await import('./j.js');
  jMod.initArrays();

  for (let i = 0; i < 5; i++) states[i] = 1;
  startRenderLoop();
  startEventLoop();

  const { h } = await import('./h.js');
  engine = new h();
  engineState = 2;

  await engine.handleEvent(1);
}

function startRenderLoop() {
  let lastTime = 0;
  function loop() {
    if (destroyed) return;
    canvas.repaint();
    canvas.serviceRepaints();
    if (nextScreen !== currentScreen) {
      currentScreen = nextScreen;
      canvas._currentScreen = currentScreen;
      if (currentScreen) {
        canvas.setBarText(currentScreen.a[0], 0);
        canvas.setBarText(currentScreen.a[1], 1);
        canvas.setInputMode(currentScreen.d);
        currentScreen.screenEntered();
      }
    }
    if (currentScreen) {
      const now = performance.now();
      const dt = lastTime ? Math.min(now - lastTime, 500) : 16;
      lastTime = now;
      currentScreen.update(dt);
    }
    renderRaf = requestAnimationFrame(loop);
  }
  renderRaf = requestAnimationFrame(loop);
}

function stopRenderLoop() {
  if (renderRaf != null) {
    cancelAnimationFrame(renderRaf);
    renderRaf = null;
  }
}

function startEventLoop() {
  if (eventRunning) return;
  eventRunning = true;
  function tick() {
    if (destroyed || !eventRunning) return;
    while (queue.length > 0) {
      const event = queue.shift();
      dispatchSeq = event[1];
      if (engine) {
        try {
          engine.dispatchEvent(event[0], event[2]);
        } catch (_e) {}
      }
    }
    setTimeout(tick, 0);
  }
  setTimeout(tick, 0);
}

async function startResumeThread() {
  await new Promise((r) => setTimeout(r, 700));
  if (engineState === 4) {
    engineState = 5;
    try {
      engine.dispatchEvent(3, null);
    } catch (_e) {}
    engineState = 2;
  }
}

export function loadRecord(name) {
  const rs = RecordStore.openRecordStore(name, false);
  if (rs == null) return null;
  const recs = rs.getNumRecords();
  if (recs === 0) return null;
  return rs.getRecord(1);
}

export function saveRecord(data, name) {
  const rs = RecordStore.openRecordStore(name, true);
  if (rs == null) return;
  const recs = rs.getNumRecords();
  if (recs > 0) {
    rs.setRecord(1, data);
  } else {
    rs.addRecord(data);
  }
}

export function deleteRecord(name) {
  try {
    RecordStore.deleteRecordStore(name);
  } catch (_e) {}
}
