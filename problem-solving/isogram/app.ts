export const isIsogram = (str: string) => {
  const formattedString = str.replace(/[-\s]/g, "").toLowerCase()
  const charMap: Map<string, number> = new Map()
  for (const char of formattedString) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char)! + 1)
    } else {
      charMap.set(char, +1)
    }
  }

  for (const [_, v] of charMap) {
    if (v > 1) return false
  }
  return true
}
