// java.util.Random as shipped in J2ME / CLDC. The 48-bit LCG constants are the
// ones from the JDK, so a given seed reproduces the same stream here as on a
// real MIDlet — that matters because the game derives entity placement and
// animation jitter from it.
//
// The 48-bit state is kept in a plain Number and advanced with 24-bit limbs
// rather than Math.imul (which is 32-bit, so it silently destroys this
// multiplier) or BigInt (too slow for the per-frame call sites). Every
// intermediate product stays under 2^53, so it is exact.
const MULT = 0x5deece66d;
const MULT_HI = Math.floor(MULT / 0x1000000);   // 1502
const MULT_LO = MULT % 0x1000000;               // 15525485
const MULT_HIGH = MULT - (MULT % 0x100000000);  // 21474836480, the part XOR cannot reach
const ADDEND = 0xb;
const TWO_24 = 0x1000000;
const TWO_32 = 0x100000000;
const TWO_48 = 0x1000000000000;

export class Random {
  constructor(seed = 0) {
    this.setSeed(seed);
  }

  // java.util.Random.setSeed scrambles with XOR, it does not multiply. The XOR
  // only reaches the low 32 bits (the seed is an int), so MULT ^ seed is done
  // arithmetically — a bitwise `^` would truncate MULT to 32 bits and yield a
  // negative state.
  setSeed(seed) {
    this.seed = MULT_HIGH + (((MULT % TWO_32) ^ (seed & 0xffffffff)) >>> 0);
  }

  next(bits) {
    const s = this.seed;
    const hi = Math.floor(s / TWO_24);
    const lo = s - hi * TWO_24;
    const mid = hi * MULT_LO + lo * MULT_HI;
    // s*M + ADDEND == ((hi*ML + lo*MH) mod 2^24) * 2^24 + lo*ML + ADDEND, so
    // ADDEND belongs on the LOW term. Putting it on the 2^24 term would scale
    // it by 2^24 and the stream would drift from java.util.Random immediately.
    this.seed = ((mid % TWO_24) * TWO_24 + lo * MULT_LO + ADDEND) % TWO_48;
    if (bits === 32) {
      const v = Math.floor(this.seed / 0x10000);
      return v >= 0x80000000 ? v - 0x100000000 : v;
    }
    return Math.floor(this.seed / Math.pow(2, 48 - bits));
  }

  // One method, not two: a separate no-arg nextInt() would be shadowed by this
  // one (last definition wins) and would silently compute `bits % undefined`.
  nextInt(bound) {
    if (bound === undefined) return this.next(32);
    if (bound <= 0) throw new RangeError('bound must be positive');
    if ((bound & -bound) === bound) return Math.floor(bound * this.next(31) / 0x80000000);
    let bits;
    let val;
    do {
      bits = this.next(31);
      val = bits % bound;
    } while (bits - val + (bound - 1) > 0x7fffffff);
    return val;
  }

  nextLong() {
    const hi = this.next(32);
    const lo = this.next(32);
    return BigInt.asIntN(64, (BigInt(hi) << 32n) | BigInt(lo >>> 0));
  }

  nextBoolean() {
    return this.next(1) !== 0;
  }

  nextDouble() {
    return (this.next(26) * 134217728 + this.next(27)) / 9007199254740992;
  }

  nextFloat() {
    return this.next(24) / 16777216;
  }
}
