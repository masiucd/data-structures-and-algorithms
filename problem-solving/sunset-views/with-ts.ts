export enum Direction {
  East = "EAST",
  West = "WEST",
}

export const sunsetViews = (buildings: number[], direction: Direction) => {
  // if east left to right
  // if west right to left

  // or reverse the list
  return buildings
}

const buildings = [3, 5, 4, 4, 3, 1, 3, 2]
const direction = Direction
const res = sunsetViews(buildings, direction.East)

console.log(res)
