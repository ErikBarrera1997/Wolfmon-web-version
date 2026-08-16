export class DataInputStream {
  constructor(bytes) {
    this.bytes = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    this.pos = 0;
    this.view = new DataView(
      this.bytes.buffer,
      this.bytes.byteOffset,
      this.bytes.byteLength,
    );
  }

  static fromBytes(bytes) {
    return new DataInputStream(bytes);
  }

  position() {
    return this.pos;
  }

  available() {
    return this.bytes.length - this.pos;
  }

  readInt() {
    const value = this.view.getInt32(this.pos, false);
    this.pos += 4;
    return value;
  }

  readShort() {
    const value = this.view.getInt16(this.pos, false);
    this.pos += 2;
    return value;
  }

  readUnsignedShort() {
    const value = this.view.getUint16(this.pos, false);
    this.pos += 2;
    return value;
  }

  readByte() {
    const value = this.view.getInt8(this.pos);
    this.pos += 1;
    return value;
  }

  readUnsignedByte() {
    const value = this.view.getUint8(this.pos);
    this.pos += 1;
    return value;
  }

  readBoolean() {
    return this.readUnsignedByte() !== 0;
  }

  readUTF() {
    const length = this.readUnsignedShort();
    const value = new TextDecoder('utf-8').decode(
      this.bytes.subarray(this.pos, this.pos + length),
    );
    this.pos += length;
    return value;
  }

  readFully(out) {
    const len = out.length;
    for (let i = 0; i < len; i++) {
      out[i] = this.bytes[this.pos + i];
    }
    this.pos += len;
    return out;
  }

  skipBytes(count) {
    const skipped = Math.max(0, Math.min(count, this.available()));
    this.pos += skipped;
    return skipped;
  }

  close() {}
}
