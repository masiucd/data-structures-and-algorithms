const fo = (s: string) => {
  const cache = {}

  for (let char of s) {
    if (!cache[char]) {
      cache[char] = 1
    } else {
      cache[char] += 1
    }
  }

  const [first] = Object.values(cache).sort((a, b) => a < b)

  for (let key in cache) {
    if (cache[key] === first) {
      return key
    }
  }
  return ""
}

let res = fo("apaappp")
let res2 = fo("marcell")
console.log(res, res2)

