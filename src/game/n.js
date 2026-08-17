import { Manager } from '../../audio/manager.js';

let enabled = true;
let sounds = new Array(0);
let ids = new Int32Array(0);
let currentPlayer = null;
let volume = 100;

export function registerSound(data, id) {
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === id) {
      sounds[i] = null;
      ids[i] = -1;
    }
  }
  const newSounds = new Array(sounds.length + 1);
  for (let i = 0; i < sounds.length; i++) newSounds[i] = sounds[i];
  newSounds[sounds.length] = data;
  sounds = newSounds;
  const newIds = new Int32Array(ids.length + 1);
  newIds.set(ids);
  newIds[ids.length] = id;
  ids = newIds;
}

export function playSound(id, loops) {
  let idx = -1;
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === id) {
      idx = i;
      break;
    }
  }
  if (idx === -1) return;
  stopPlayer();
  if (enabled) {
    try {
      currentPlayer = Manager.createPlayer(new Uint8Array(sounds[idx]), 'audio/midi');
      currentPlayer.prefetch();
      const vc = currentPlayer.getControl('VolumeControl');
      if (vc) vc.setLevel(volume);
      currentPlayer.setLoopCount(loops);
      currentPlayer.start();
    } catch (_e) { console.error('[Audio] playSound error:', _e); }
  }
}

export function stopSound() {
  stopPlayer();
}

export function stopPlayer() {
  if (currentPlayer != null) {
    try { currentPlayer.stop(); } catch (_e) {}
    currentPlayer = null;
  }
}

export function setSoundEnabled(flag) {
  if (!flag) stopPlayer();
  enabled = flag;
}

export function isSoundEnabled() {
  return enabled;
}
