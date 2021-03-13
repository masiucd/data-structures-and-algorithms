const helper = (xs: A, m = 1) => {
  let res = 0
  for (const x of xs) {
    if (Array.isArray(x)) {
      res += helper(x, m + 1)
    } else {
      res += x
    }
  }
  return res * m
}

type A = Array<number | A>

const fn = (xs: A) => {
  return helper(xs, 1)
}

const xs = [1, 2, 99, [1, 2], 3, [6, [-2, 100], 99]]

console.log(fn(xs))
