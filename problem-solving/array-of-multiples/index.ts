const arrayOfMultiples = (n: number, length: number) => {
  const res = []
  for (let i = 1; i <= length; i++) {
    res.push(n * i)
  }
  return res
}

const arrayOfMultiples2 = (n: number, length: number) =>
  [...Array(length).keys()].map((_, i) => i + 1).map(x => x * n)

// console.log(arrayOfMultiples(7, 5))
