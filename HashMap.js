export default class HashMap {
  constructor() {
    this.buckets = [];
    this.buckets.length = 16;
  }

  getLoadFactor() {
    return this.length() / this.buckets.length;
  }

  resize() {
    const oldEntries = this.entries();
    const oldBucketsLength = this.buckets.length;
    this.buckets = [];
    this.buckets.length = oldBucketsLength * 2;
    for (let bucket of oldEntries) {
      this.set(...bucket);
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];

    if (bucket && bucket[0] !== key) {
      this.resize();
      this.set(key, value);
    } else {
      this.buckets[this.hash(key)] = [key, value];
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];

    if (bucket && bucket[0] === key) return bucket[1];
    else return null;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];

    if (bucket && bucket[0] === key) return true;
    else return false;
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];

    if (bucket && bucket[0] === key) {
      this.buckets[this.hash(key)] = undefined;
      return true;
    } else {
      return false;
    }
  }

  length() {
    return this.keys().length;
  }

  clear() {
    this.buckets = [];
    this.buckets.length = 16;
  }

  keys() {
    const arrKey = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i][0])
        arrKey.push(this.buckets[i][0]);
    }
    return arrKey;
  }

  values() {
    const arrValue = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i][1])
        arrValue.push(this.buckets[i][1]);
    }
    return arrValue;
  }

  entries() {
    const arrEntry = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i])
        arrEntry.push([this.buckets[i][0], this.buckets[i][1]]);
    }
    return arrEntry;
  }
}
