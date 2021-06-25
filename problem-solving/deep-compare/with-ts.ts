const deepCompareX = (a: Record<string, any>, b: Record<string, any>): boolean => {
  // check if references point to same object or that a and b are equal then return true
  if (a === b) return true

  // check if a and b are valid objects
  if ((typeof a !== "object" && a === null) || (typeof b !== "object" && b === null)) return false

  // get all the keys from the objects as a list and compare the length
  const keysFromObject1 = Object.keys(a)
  const keysFromObject2 = Object.keys(b)
  if (keysFromObject1.length !== keysFromObject2.length) return false

  for (const key in a) {
    if (!keysFromObject2.includes(key) && !deepCompareX(a[key], b[key])) return false
  }

  return true
}

const a = {
  name: "A",
  age: 34,
  q: {
    f: { a: "hello" },
  },
}
const b = {
  name: "A",
  age: 34,
  q: {
    f: { a: "hello" },
  },
}

// console.log(deepCompareX(a, b))
