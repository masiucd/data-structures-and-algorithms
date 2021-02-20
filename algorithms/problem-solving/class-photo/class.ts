export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]): boolean {
  redShirtHeights.sort()
  blueShirtHeights.sort()
  let backRow =
    redShirtHeights[redShirtHeights.length - 1] > blueShirtHeights[blueShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights
  let frontRow =
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

const reds = [5, 8, 1, 3, 4]
const blues = [6, 9, 2, 4, 5]

const r = classPhotos(reds, blues)
console.log(r)
