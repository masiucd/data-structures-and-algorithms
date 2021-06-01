export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const coinsNeeded = new Array(n + 1).fill(Infinity)
  coinsNeeded[0] = 0
  for (const denom of denoms) {
    for (let index = 0; index < coinsNeeded.length; index++) {
      if (denom <= index) {
        coinsNeeded[index] = Math.min(coinsNeeded[index], coinsNeeded[index - denom] + 1)
      }
    }
  }
  return coinsNeeded[n] !== Infinity ? coinsNeeded[n] : -1
}

// console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
