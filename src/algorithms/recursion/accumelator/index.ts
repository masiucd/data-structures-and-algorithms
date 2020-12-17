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

function joinElementsIterativeApproach(array: string[], str: string) {
  let result = ""
  for (let i = 0; i < array.length - 1; i += 1) {
    result += array[i] + str
  }

  return result + array[array.length - 1]
}

// console.log(joinElementsIterativeApproach(["s", "cr", "t cod", " :) :)"], "e"))
