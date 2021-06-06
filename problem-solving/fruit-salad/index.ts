export const sliceFruit = (fruit: string) => {
  const middle = Math.floor(fruit.length / 2)
  const first = fruit.slice(0, middle)
  const second = fruit.slice(middle)
  return [first, second]
}

export const fruitSalad = (xs: string[]) => {
  const res = []
  for (const fruit of xs) {
    res.push(sliceFruit(fruit))
  }
  return res
    .flat()
    .sort((a, b) => a.localeCompare(b))
    .join("")
}
