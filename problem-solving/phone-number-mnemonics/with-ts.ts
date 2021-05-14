const phoneMap: Record<string, string[]> = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}
export function phoneNumberMnemonics(phoneNumber: string): string[] {
  const currentMnemonic = new Array(phoneNumber.length).fill("0")
  const result: string[] = []

  pickLetter(0, phoneNumber, currentMnemonic, result)
  return result
}
function pickLetter(
  index: number,
  phoneNumber: string,
  currentMnemonic: string[],
  result: string[]
) {
  if (index === phoneNumber.length) {
    const mnemonic = currentMnemonic.join("")
    result.push(mnemonic)
  } else {
    const digit = phoneNumber.charAt(index)
    const letters = phoneMap[digit]
    for (const letter of letters) {
      currentMnemonic[index] = letter
      pickLetter(index + 1, phoneNumber, currentMnemonic, result)
    }
  }
}

// const p = "1905"
// const res = phoneNumberMnemonics(p)

// console.log(res)
