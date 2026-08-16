function copyBytes(data, offset, len) {
  offset = offset || 0;
  const length =
    len == null ? (data ? data.length : 0) : Math.max(0, len);
  const out = new Uint8Array(length);
  if (data) {
    const source = data instanceof Uint8Array ? data : new Uint8Array(data);
    out.set(source.slice(offset, offset + length));
  }
  return out;
}

const stores = new Map();

const STORAGE_KEY = 'wolfmoon.rms';

function loadFromStorage() {
  if (typeof localStorage === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    for (const [name, records] of Object.entries(JSON.parse(raw))) {
      stores.set(
        name,
        records.map((record) => new Uint8Array(record)),
      );
    }
  } catch {
    stores.clear();
  }
}

function persist() {
  if (typeof localStorage === 'undefined') return;
  const out = {};
  for (const [name, records] of stores) {
    out[name] = records.map((record) => Array.from(record));
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
  } catch {
    // storage full or unavailable; keep in-memory copy
  }
}

loadFromStorage();

export class RecordStore {
  constructor(name) {
    this.name = name;
    this.records = stores.get(name);
  }

  static openRecordStore(name, createIfNecessary) {
    if (!stores.has(name)) {
      if (!createIfNecessary) return null;
      stores.set(name, []);
    }
    return new RecordStore(name);
  }

  static deleteRecordStore(name) {
    stores.delete(name);
    persist();
  }

  getNumRecords() {
    return this.records.length;
  }

  addRecord(data, offset, len) {
    this.records.push(copyBytes(data, offset, len));
    persist();
    return this.records.length - 1;
  }

  getRecord(id) {
    const record = this.records[id];
    if (record == null) {
      throw new Error(`RecordStore: no record at index ${id}`);
    }
    return record.slice();
  }

  setRecord(id, data, offset, len) {
    if (this.records[id] == null) {
      throw new Error(`RecordStore: no record at index ${id}`);
    }
    this.records[id] = copyBytes(data, offset, len);
    persist();
  }

  closeRecordStore() {}
}
