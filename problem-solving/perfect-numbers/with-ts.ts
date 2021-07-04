export const classify = (n: number): string => {
  if (n <= 0) {
    throw new Error("Classification is only possible for natural numbers.")
  }
  const nums: Array<number> = []
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      nums.push(i)
    }
  }
  const result = nums.reduce((a, b) => a + b, 0)
  return checkResult(n, result)
}

function checkResult(n: number, result: number) {
  switch (true) {
    case n === result:
      return "perfect"
    case result > n:
      return "abundant"
    case result < n:
      return "deficient"
    default:
      throw new Error("Classification is only possible for natural numbers.")
  }
}
