const phoneMap: Record<string, string[]> = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "0"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}

export function phoneNumberMnemonics(phoneNumber: string) {
  const currentMnemonic = new Array(phoneNumber.length).fill("0")
  const result: string[] = []
  pickLetter(0, phoneNumber, currentMnemonic, result)
  return result
}

const ph = "1905"

const res = phoneNumberMnemonics(ph)
console.log(res)

function pickLetter(
  index: number,
  phoneNumber: string,
  currentMnemonic: string[],
  result: string[]
) {
  // base case
  if (index === phoneNumber.length) {
    const mnemonic = currentMnemonic.join(",")
    result.push(mnemonic)
  } else {
    const digit = phoneNumber[index]
    const letters = phoneMap[digit]
    for (const letter of letters) {
      currentMnemonic[index] = letter
      pickLetter(index + 1, phoneNumber, currentMnemonic, result)
    }
  }
}
