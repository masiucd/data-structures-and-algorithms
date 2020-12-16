export const factorial = (n: number) => {
  if (n < 2) return n
  return n * factorial(n - 1)
}
