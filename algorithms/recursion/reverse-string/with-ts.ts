const reverseRec = (s: string): string => {
  return s.length === 0 ? s : reverseRec(s.substring(1)) + s.substring(0, 1)
}

const reverseRec2 = (s: string): string => {
  return s.length === 0 ? s : reverseRec(s.slice(1)) + s[0]
}
const reverseRec3 = (s: string): string => {
  if (s.length === 0) {
    return s
  }
  return reverseRec3(s.slice(1)) + s[0]
}

const string = "hello"
const result = reverseRec2(string)
console.log(string.substring(0, 1))
console.log(string.substring(1))
console.log(reverseRec2("hello"))
