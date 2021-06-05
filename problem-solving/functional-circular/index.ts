const arr = ["a", "b", "c"]
const length = <T>(value: string | Array<T>) => value.length

const safeCircular = <T>(list: Array<T>, item: T): T => {
  const len = length(list)
  const index = list.indexOf(item)
  return list[((index % len) + len) % len]
}

// console.log(safeCircular(arr, "a"))
