function fn(s: string): string {
  return s.length === 0 ? "" : fn(s.slice(1)) + s.substr(0, 1)
}

console.log(fn("hello"))
