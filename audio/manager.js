let audioCtx = null;

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function midiToFreq(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

const GM_PATCH_MAP = new Float32Array(128);
for (let i = 0; i < 128; i++) {
  if (i >= 32 && i <= 39) GM_PATCH_MAP[i] = 1;
  else if (i >= 40 && i <= 47) GM_PATCH_MAP[i] = 2;
  else if (i >= 48 && i <= 55) GM_PATCH_MAP[i] = 0;
  else if (i >= 56 && i <= 63) GM_PATCH_MAP[i] = 2;
  else if (i >= 64 && i <= 71) GM_PATCH_MAP[i] = 1;
  else if (i >= 72 && i <= 79) GM_PATCH_MAP[i] = 0;
  else if (i >= 80 && i <= 87) GM_PATCH_MAP[i] = 0;
  else if (i >= 88 && i <= 95) GM_PATCH_MAP[i] = 0;
  else if (i >= 96 && i <= 103) GM_PATCH_MAP[i] = 0;
  else if (i >= 104 && i <= 111) GM_PATCH_MAP[i] = 2;
  else GM_PATCH_MAP[i] = 0;
}

function createWave(ctx, type) {
  const osc = ctx.createOscillator();
  if (type === 0) osc.type = 'sine';
  else if (type === 1) osc.type = 'triangle';
  else osc.type = 'square';
  return osc;
}

function parseMidi(data) {
  const view = data instanceof Uint8Array ? data : new Uint8Array(data);
  let pos = 0;

  function readUint8() { return view[pos++]; }
  function readUint16() { return (view[pos++] << 8) | view[pos++]; }
  function readUint32() { return (view[pos++] << 24) | (view[pos++] << 16) | (view[pos++] << 8) | view[pos++]; }
  function readVarLen() {
    let val = 0;
    let b;
    do { b = readUint8(); val = (val << 7) | (b & 0x7F); } while (b & 0x80);
    return val;
  }

  const header = String.fromCharCode(view[0], view[1], view[2], view[3]);
  if (header !== 'MThd') return null;
  const hdrLen = readUint32();
  const format = readUint16();
  const numTracks = readUint16();
  const division = readUint16();
  pos += hdrLen - 6;

  const tracks = [];
  for (let t = 0; t < numTracks; t++) {
    const tag = String.fromCharCode(view[pos], view[pos + 1], view[pos + 2], view[pos + 3]);
    pos += 4;
    const trkLen = readUint32();
    const endPos = pos + trkLen;
    const events = [];
    let runningStatus = 0;
    while (pos < endPos) {
      const delta = readVarLen();
      let status = readUint8();
      if (status < 0x80) { pos--; status = runningStatus; } else { runningStatus = status; }
      const type = status & 0xF0;
      const channel = status & 0x0F;
      if (type === 0x90 || type === 0x80) {
        const note = readUint8();
        const vel = readUint8();
        events.push({ delta, type, channel, note, vel });
      } else if (type === 0xA0) {
        pos += 2;
        events.push({ delta, type, channel });
      } else if (type === 0xB0) {
        const ctrl = readUint8();
        const val = readUint8();
        events.push({ delta, type, channel, ctrl, val });
      } else if (type === 0xC0) {
        const prog = readUint8();
        events.push({ delta, type, channel, prog });
      } else if (type === 0xD0) {
        pos += 1;
        events.push({ delta, type, channel });
      } else if (type === 0xE0) {
        pos += 2;
        events.push({ delta, type, channel });
      } else if (status === 0xFF) {
        const metaType = readUint8();
        const len = readVarLen();
        if (metaType === 0x51) {
          const uspb = (readUint8() << 16) | (readUint8() << 8) | readUint8();
          events.push({ delta, type: 0xFF, metaType, uspb });
          pos += len - 3;
        } else if (metaType === 0x2F) {
          events.push({ delta, type: 0xFF, metaType, end: true });
          pos += len;
        } else {
          pos += len;
          events.push({ delta, type: 0xFF, metaType });
        }
      } else if (status === 0xF7) {
        const len = readVarLen();
        pos += len;
        events.push({ delta, type: 0xF7 });
      } else {
        events.push({ delta, type: status });
      }
    }
    tracks.push(events);
  }
  return { format, division, tracks };
}

class MidiSynth {
  constructor(data) {
    this.parsed = parseMidi(data);
    this.ctx = getCtx();
    this.channels = new Array(16);
    for (let i = 0; i < 16; i++) {
      this.channels[i] = { program: 0, gain: this.ctx.createGain(), pan: this.ctx.createStereoPanner() };
      this.channels[i].gain.connect(this.channels[i].pan);
      this.channels[i].pan.connect(this.ctx.destination);
    }
    this.channels[9].gain.gain.value = 0.4;
    this.activeNotes = {};
    this.scheduled = [];
    this.stopped = false;
    this.onEnded = null;
  }

  play(loopCount) {
    if (!this.parsed) return;
    const { division, tracks } = this.parsed;
    const loop = loopCount === -1;
    let remainingLoops = loopCount === -1 ? Infinity : Math.max(1, loopCount);

    const scheduleLoop = () => {
      if (this.stopped) return;
      remainingLoops--;
      let tick = 0;
      const trackStates = tracks.map(trk => ({ events: trk, idx: 0, endTick: 0, active: trk.length > 0 }));
      let allDone = false;
      let tempo = 500000;
      const tickToSec = (t) => (t * tempo) / (division * 1000000);
      const startTime = this.ctx.currentTime + 0.05;
      let maxTick = 0;

      while (!allDone) {
        allDone = true;
        let minDelta = Infinity;
        for (let t = 0; t < trackStates.length; t++) {
          const ts = trackStates[t];
          if (!ts.active) continue;
          if (ts.idx >= ts.events.length) {
            ts.active = false;
            continue;
          }
          allDone = false;
          const ev = ts.events[ts.idx];
          if (ev.delta > 0) {
            if (ev.delta < minDelta) minDelta = ev.delta;
          }
        }
        if (allDone) break;
        if (minDelta === Infinity) minDelta = 0;
        tick += minDelta;
        for (let t = 0; t < trackStates.length; t++) {
          const ts = trackStates[t];
          if (!ts.active) continue;
          while (ts.idx < ts.events.length && ts.events[ts.idx].delta <= minDelta) {
            ts.events[ts.idx].delta -= minDelta;
            if (ts.events[ts.idx].delta > 0) break;
            const ev = ts.events[ts.idx];
            ts.idx++;
            if (ev.type === 0xFF && ev.metaType === 0x51) {
              tempo = ev.uspb;
            } else if (ev.type === 0xFF && ev.metaType === 0x2F) {
              ts.active = false;
            } else if (ev.type === 0xC0) {
              this.channels[ev.channel].program = ev.prog;
            } else if (ev.type === 0x90 && ev.vel > 0) {
              this.noteOn(ev.channel, ev.note, ev.vel, startTime + tickToSec(tick));
            } else if (ev.type === 0x80 || (ev.type === 0x90 && ev.vel === 0)) {
              this.noteOff(ev.channel, ev.note, startTime + tickToSec(tick));
            } else if (ev.type === 0xB0 && ev.ctrl === 7) {
              const vol = ev.val / 127;
              this.channels[ev.channel].gain.gain.setValueAtTime(vol, startTime + tickToSec(tick));
            } else if (ev.type === 0xB0 && ev.ctrl === 10) {
              const pan = (ev.val - 64) / 64;
              this.channels[ev.channel].pan.pan.setValueAtTime(pan, startTime + tickToSec(tick));
            }
          }
        }
        if (tick > maxTick) maxTick = tick;
      }

      const totalDuration = tickToSec(maxTick) + 0.1;
      if (!loop || remainingLoops > 0) {
        const timer = setTimeout(() => {
          this.scheduled = this.scheduled.filter(s => s !== timer);
          if (!this.stopped && (loop || remainingLoops > 0)) scheduleLoop();
          else if (this.onEnded) this.onEnded();
        }, totalDuration * 1000 + 50);
        this.scheduled.push(timer);
      } else if (this.onEnded) {
        this.onEnded();
      }
    };
    scheduleLoop();
  }

  noteOn(channel, note, velocity, time) {
    const key = `${channel}_${note}`;
    if (this.activeNotes[key]) this.noteOff(channel, note, time);
    const ch = this.channels[channel];
    if (!ch) return;
    const ctx = this.ctx;
    const vol = (velocity / 127) * (ch.gain.gain.value || 0.5);
    const waveType = GM_PATCH_MAP[ch.program] || 0;
    const osc = createWave(ctx, waveType);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vol * 0.3, time + 0.01);
    osc.connect(gain);
    gain.connect(ch.gain);
    osc.frequency.setValueAtTime(midiToFreq(note), time);
    osc.start(time);
    this.activeNotes[key] = { osc, gain };
  }

  noteOff(channel, note, time) {
    const key = `${channel}_${note}`;
    const n = this.activeNotes[key];
    if (!n) return;
    try {
      n.gain.gain.cancelScheduledValues(time);
      n.gain.gain.setValueAtTime(n.gain.gain.value, time);
      n.gain.gain.linearRampToValueAtTime(0, time + 0.05);
      n.osc.stop(time + 0.06);
    } catch (_e) {}
    delete this.activeNotes[key];
  }

  stop() {
    this.stopped = true;
    for (const t of this.scheduled) clearTimeout(t);
    this.scheduled = [];
    for (const key of Object.keys(this.activeNotes)) {
      const n = this.activeNotes[key];
      try {
        n.gain.gain.cancelScheduledValues(this.ctx.currentTime);
        n.gain.gain.setValueAtTime(n.gain.gain.value, this.ctx.currentTime);
        n.gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.05);
        n.osc.stop(this.ctx.currentTime + 0.06);
      } catch (_e) {}
    }
    this.activeNotes = {};
  }
}

export const VolumeControl = {
  setLevel(level) {},
  getLevel() {
    return 100;
  },
};

export class Player {
  constructor(type, source) {
    this.type = type;
    this.source = source;
    this._started = false;
    this._loopCount = 1;
    this._synth = null;
  }

  prefetch() {}

  start() {
    this._started = true;
    if (this.source && this.source.length > 0) {
      this._synth = new MidiSynth(this.source);
      this._synth.play(this._loopCount);
    }
  }

  stop() {
    this._started = false;
    if (this._synth) {
      this._synth.stop();
      this._synth = null;
    }
  }

  close() {
    this.stop();
  }

  setLoopCount(count) {
    this._loopCount = count;
  }

  getControl(controlName) {
    return controlName === 'VolumeControl' ? VolumeControl : null;
  }

  getMediaTime() {
    return -1;
  }
}

export const Manager = {
  createPlayer(source, type) {
    return new Player(type, source);
  },
};
