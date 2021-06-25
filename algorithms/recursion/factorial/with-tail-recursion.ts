const factorialTailRecursion = (n: number, total = 1): number => {
  if (n === 0) return total
  console.log(n, total)
  return factorialTailRecursion(n - 1, n * total)
}
