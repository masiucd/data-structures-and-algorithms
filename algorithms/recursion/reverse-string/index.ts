export const revereString = (s: string): string => {
  if (s === "") return ""
  return revereString(s.slice(1)) + s[0]
}

export const revereString2 = (s: string): string =>
  s.length === 0 ? "" : revereString2(s.slice(1)) + s.substr(0, 1)
