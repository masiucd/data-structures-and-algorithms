export enum Direction {
  East = "EAST",
  West = "WEST",
}

export const sunsetViews = (buildings: number[], direction: Direction) => {
  const buildingsWithSunset: number[] = []
  const startIndex = direction === Direction.West ? 0 : buildings.length - 1

  // if direction is EAST then we want to go from right to left

  let currentHeight = 0
  if (startIndex > 0) {
    for (let i = startIndex; i >= 0; i--) {
      const currentBuilding = buildings[i]
      if (currentBuilding > currentHeight) {
        currentHeight = currentBuilding
        buildingsWithSunset.push(i)
      }
    }
  } else {
    for (let i = startIndex; i < buildings.length; i++) {
      const currentBuilding = buildings[i]
      if (currentBuilding > currentHeight) {
        currentHeight = currentBuilding
        buildingsWithSunset.push(i)
      }
    }
  }

  return buildingsWithSunset.sort((a, b) => a - b)
}

const buildings = [3, 5, 4, 4, 3, 1, 3, 2]
const direction = Direction
// const res = sunsetViews(buildings, direction.East)
const res = sunsetViews(buildings, direction.West)

console.log(res)
