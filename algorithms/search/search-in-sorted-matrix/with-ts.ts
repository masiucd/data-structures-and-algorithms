type Range = [number, number]

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  const pair: Range = [-1, -1]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        pair[0] = i
        pair[1] = j
      }
    }
  }

  return pair
}
export function searchInSortedMatrix2(matrix: number[][], target: number): Range {
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--
    } else if (matrix[row][col] < target) {
      row++
    } else {
      return [row, col]
    }
  }

  return [-1, -1]
}
