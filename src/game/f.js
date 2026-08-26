export class f {
  // `a` is emitted as both a static sine table, instance arrays, integers,
  // and a boolean by the decompiler. Suffixes preserve each distinct field.
  static hAngleCount = 360;
  static aSinTable = new Int16Array(360);
  static bSinTableReady = false;

  constructor(capacity, accelerationX, accelerationY, velocityX, velocityY, drag, emitOnExpire) {
    if (!f.bSinTableReady) f.#generateSinTable();
    this.gCapacity = Math.max(0, capacity | 0);
    this.aAccelerationX = accelerationX | 0;
    this.bAccelerationY = accelerationY | 0;
    this.cVelocityX = velocityX << 8;
    this.dVelocityY = velocityY << 8;
    this.eDrag = drag | 0;
    this.aEmitOnExpire = Boolean(emitOnExpire);
    this.aLife = new Int32Array(this.gCapacity);
    this.bX = new Int32Array(this.gCapacity);
    this.cY = new Int32Array(this.gCapacity);
    this.dVelocity = new Int32Array(this.gCapacity);
    this.eVerticalVelocity = new Int32Array(this.gCapacity);
    this.fCount = 0;
  }

  static #generateSinTable() {
    for (let angle = 0; angle < 360; angle++) {
      f.aSinTable[angle] = Math.round(Math.sin(angle * Math.PI / 180) * 16384);
    }
    f.bSinTableReady = true;
  }

  static sqrt(value) {
    return Math.floor(Math.sqrt(Math.max(0, value)));
  }

  static nextRandom() {
    return (Math.random() * 0x80000000) | 0;
  }

  #append(life, x, y, velocityX, velocityY) {
    if (this.fCount >= this.gCapacity) return;
    const index = this.fCount++;
    this.aLife[index] = Math.max(1, life | 0);
    this.bX[index] = x | 0;
    this.cY[index] = y | 0;
    this.dVelocity[index] = velocityX | 0;
    this.eVerticalVelocity[index] = velocityY | 0;
  }

  // Supports both overloaded Java spawnParticles signatures.
  spawnParticles(amount, x, y, speed, life, spread, extra = 0, targetX, targetY) {
    const total = Math.min(Math.max(0, amount | 0), this.gCapacity - this.fCount);
    for (let index = 0; index < total; index++) {
      const angle = Math.floor(index * 360 / Math.max(1, total));
      const jitter = ((f.nextRandom() >>> 16) % (Math.max(0, spread | 0) * 2 + 1)) - (spread | 0);
      const heading = (angle + jitter + 360) % 360;
      const magnitude = (speed | 0) + (extra | 0);
      let vx = (f.aSinTable[(heading + 90) % 360] * magnitude) >> 6;
      let vy = (f.aSinTable[heading] * magnitude) >> 6;
      if (targetX !== undefined && targetY !== undefined) {
        vx += ((targetX - x) << 8) / Math.max(1, life | 0);
        vy += ((targetY - y) << 8) / Math.max(1, life | 0);
      }
      this.#append(life, x << 8, y << 8, vx, vy);
    }
  }

  spawnHomingParticles(amount, x, y, targetX, targetY, speed, life, spread, acceleration, drag, _unused1, _unused2, _unused3, emitOnExpire) {
    const originalDrag = this.eDrag;
    this.eDrag = drag | 0;
    this.spawnParticles(amount, x, y, speed, life, spread, acceleration, targetX, targetY);
    this.eDrag = originalDrag;
    this.aEmitOnExpire = Boolean(emitOnExpire);
  }

  update(deltaMs) {
    for (let index = 0; index < this.fCount; index++) {
      this.aLife[index] -= deltaMs;
      if (this.aLife[index] < 1) {
        this.fCount--;
        if (index !== this.fCount) {
          this.aLife[index] = this.aLife[this.fCount];
          this.bX[index] = this.bX[this.fCount];
          this.cY[index] = this.cY[this.fCount];
          this.dVelocity[index] = this.dVelocity[this.fCount];
          this.eVerticalVelocity[index] = this.eVerticalVelocity[this.fCount];
          index--;
        }
        continue;
      }
      if (this.eDrag) {
        this.dVelocity[index] -= (this.dVelocity[index] * this.eDrag * deltaMs) >> 14;
        this.eVerticalVelocity[index] -= (this.eVerticalVelocity[index] * this.eDrag * deltaMs) >> 14;
      }
      this.dVelocity[index] += this.aAccelerationX * deltaMs;
      this.eVerticalVelocity[index] += this.bAccelerationY * deltaMs;
      this.bX[index] += ((this.dVelocity[index] + this.cVelocityX) * deltaMs) >> 4;
      this.cY[index] += ((this.eVerticalVelocity[index] + this.dVelocityY) * deltaMs) >> 4;
    }
  }
}

export default f;
