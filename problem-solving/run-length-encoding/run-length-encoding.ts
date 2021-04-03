const append = <T>(xs: T[]) => (element: T) => xs.push(element)

const getLast = (element: string) => element[element.length - 1]

export function runLengthEncoding(input: string): string {
  const chars: string[] = []
  let step = 1

  const appendToChars = append(chars)

  for (let i = 1; i < input.length; i++) {
    const current = input[i]
    const prev = input[i - 1]
    if (current !== prev || step === 9) {
      appendToChars(step.toString())
      appendToChars(prev)
      step = 0
    }
    step += 1
  }

  appendToChars(step.toString())
  appendToChars(getLast(input))

  return chars.join("")
}

const input = "AAAAAAAAAAAAABBCCCCDD"

console.log(runLengthEncoding(input))
