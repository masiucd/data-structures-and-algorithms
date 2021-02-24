class HashTable<K extends string, V extends number> {
  keyMap: Array<number>
  constructor(size: number = 53) {
    this.keyMap = new Array<number>(size)
  }

  hash(key: K) {
    return key.toString().length
  }

  set(key: K, value: V) {
    const index = this.getIndex(key)
    this.keyMap[index] = value
  }
  get(key: K) {
    return this.keyMap[this.getIndex(key)]
  }

  getIndex(key: K) {
    const indexHash = this.hash(key)
    const index = indexHash % this.keyMap.length
    return index
  }
}

const hm = new HashTable()
hm.set("1", 22)
const x = hm.get("1")
console.log(x)
console.log(hm)
