const circularList = (xs: Array<number>, loops = 2): Array<number> => {
  const result: Array<number> = []
  for (let i = 0; i < loops * xs.length; i++) {
    const circularIndex = i % xs.length
    result.push(xs[circularIndex])
  }
  return result
}
