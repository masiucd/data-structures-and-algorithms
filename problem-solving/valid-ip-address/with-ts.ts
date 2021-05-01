export function validIPAddresses(string: string): string[] {
  return [""]
}
// need to be in range of = 0 to 255.
// Greater then 255 will be a invalid ip-address
// must be 4 digits 0.0.0.0 is OK
// leading zero is not allowed
// at most 12 digits

let ip = "1921680"

console.log(validIPAddresses(ip))
