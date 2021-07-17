interface StorageQ<T> {
  box: Record<string, T>
  size: number
  headIndex: number
}
export function queue<T>() {
  const storage: StorageQ<T> = {
    box: {},
    size: 0,
    headIndex: 0,
  }

  /**
   * Enqueue a new value at the end of the queue
   * @param item
   */
  const enqueue = (item: T) => {
    const nextIndex = storage.size + storage.headIndex
    storage.box[nextIndex] = item
    storage.size++
  }

  /**
   * dequeue the value from the beginning of the queue
   * FIFO First In First Out
   */
  const dequeue = () => {
    if (storage.size > 0) {
      delete storage.box[storage.headIndex]
      storage.size--
      storage.headIndex++
    } else {
      return
    }
  }

  const getSize = () => storage.size
  const getFirstItem = () => (storage.size > 0 ? storage.box[storage.headIndex] : {})

  return {
    enqueue,
    dequeue,
    getSize,
    getFirstItem,
  }
}
