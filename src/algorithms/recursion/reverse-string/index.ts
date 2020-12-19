export const revereString = (s: string) => {
  if (s === "") return ""

  return revereString(s.slice(1)) + s[0]
}
