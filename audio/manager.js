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
  }

  prefetch() {}

  start() {
    this._started = true;
  }

  stop() {
    this._started = false;
  }

  close() {}

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
