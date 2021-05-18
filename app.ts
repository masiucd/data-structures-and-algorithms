const rev = (s: string): string => {
  console.log(s, s[0])
  return s.length === 0 ? "" : rev(s.slice(1)) + s[0]
}

console.log(rev("hello"))
