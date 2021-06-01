export function nextGreaterElement(array: number[]) {
  const stack: number[] = []
  const result = new Array(array.length).fill(-1)

  // circular
  for (let i = 0; i < 2 * array.length; i++) {
    const circularIndex = i % array.length
    while (stack.length > 0 && array[stack[stack.length - 1]] < array[circularIndex]) {
      const topIndex = stack.pop() as number
      result[topIndex] = array[circularIndex]
    }
    stack.push(circularIndex)
  }
  return result
}

const r = [2, 5, -3, -4, 6, 7, 2] // [5,6,6,6,7,-1,5]
// console.log(nextGreaterElement(r))
