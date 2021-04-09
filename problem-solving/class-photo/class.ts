export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]): boolean {
  redShirtHeights.sort()
  blueShirtHeights.sort()
  const backRow =
    redShirtHeights[redShirtHeights.length - 1] > blueShirtHeights[blueShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights
  const frontRow =
    redShirtHeights[redShirtHeights.length - 1] < blueShirtHeights[blueShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights

  let c = 0
  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] > frontRow[i]) {
      c++
    }
  }

  return c === frontRow.length
}

// const r = classPhotos(reds, blues)
