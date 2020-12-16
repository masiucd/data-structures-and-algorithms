/**
 *
 * @param {string} s1
 * @param {string} s2
 */
const fn = (s1, s2) => {
  const obj = {}
  for (const s of s1) {
    if (!obj[s]) {
      obj[s] = 1
    } else {
      obj[s] += 1
    }

    for (const s of s2) {
      if (!obj[s]) {
        obj[s] = 1
      } else {
        obj[s] += 1
      }
    }
  }
  let is = true
  for (key in obj) {
    if (obj[key] % 2 !== 0) is = false
  }

  return is
}

// let x = fn("bob", "car")
// x = fn("bob", "bob")
// x = fn("racecar", "racecar")
// console.log(x)
