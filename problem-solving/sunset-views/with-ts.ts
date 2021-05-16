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

// With a stack
export const sunsetViews2 = (buildings: number[], direction: Direction) => {
  const stack: number[] = []
  const startIndex = direction === Direction.East ? 0 : buildings.length - 1
  const step = direction === Direction.East ? 1 : -1

  let idx = startIndex
  while (idx >= 0 && idx < buildings.length) {
    const buildingsHeight = buildings[idx]
    // if the top value of the stack is less then current height we are on now, then remove it from the stack
    while (stack.length > 0 && buildings[stack[stack.length - 1]] <= buildingsHeight) {
      stack.pop()
    }
    stack.push(idx)
    idx = idx + step
  }
  if (direction === Direction.West) {
    stack.reverse()
  }
  return stack
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

// const buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// const direction = Direction
// const res = sunsetViews3(buildings, direction.East)
// const res = sunsetViews(buildings, direction.West)

// console.log(res)
