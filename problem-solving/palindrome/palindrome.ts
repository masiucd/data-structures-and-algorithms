export function isPalindrome1(string: string): boolean {
  return string.split("").reverse().join("") === string
}

export function isPalindrome2(string: string): boolean {
  let left = 0
  let right = string.length - 1

  while (left < right) {
    if (string[left] === string[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  // console.log(string[left], string[right])
  // console.log(string[left + 1], string[right - 1])
  // console.log(string[left + 2], string[right - 2])
  // console.log(string[left + 3], string[right - 3])
  return true
}

export function isPalindrome3(string: string): boolean {
  let reversed = ""
  for (const c of string) {
    reversed = c + reversed
  }
  return reversed === string
}

console.log(isPalindrome3("abcdcba"))
console.log(isPalindrome3("boo"))
