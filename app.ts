export enum Direction {
  East = "EAST",
  West = "WEST",
}

export const sunsetViews3 = (buildings: number[], direction: Direction) => {
  const buildingsWithSunset: Array<number> = []
  const startIndex = direction === Direction.West ? 0 : buildings.length - 1
  const step = direction === Direction.West ? 1 : -1

  let idx = startIndex
  let currentMaxHeight = 0

  while (idx >= 0 && idx < buildings.length) {
    const currentBuildingHeight = buildings[idx]

    if (currentBuildingHeight > currentMaxHeight) {
      currentMaxHeight = currentBuildingHeight
      buildingsWithSunset.push(idx)
    }
    idx = idx + step
  }

  if (direction === Direction.East) {
    buildingsWithSunset.reverse()
  }

  return buildingsWithSunset
}

const buildings = [3, 5, 4, 4, 3, 1, 3, 2]
const direction = Direction
const res = sunsetViews3(buildings, direction.East)
// const res = sunsetViews(buildings, direction.West)

console.log(res)
