const fn = (n: number, length: number) =>
  [...Array(length).keys()].map((_, i) => i + 1).map(x => x * n)

console.log(fn(7, 5))
