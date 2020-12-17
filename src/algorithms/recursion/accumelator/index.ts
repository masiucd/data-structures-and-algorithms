const joinElements = (array: string[], str: string) => {
  const rec = (index: number, result: string) => {
    result += array[index]
    if (index === array.length - 1) {
      return result
    } else {
      return rec(index + 1, result + str)
    }
  }
  return rec(0, "")
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"))
