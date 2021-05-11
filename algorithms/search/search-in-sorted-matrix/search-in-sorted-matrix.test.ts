import { assertEquals } from "../../../package.ts"
import { searchInSortedMatrix, searchInSortedMatrix2 } from "./with-ts.ts"

Deno.test({
  name: "searchInSortedMatrix",
  fn: () => {
    const matrix = [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ]
    assertEquals(searchInSortedMatrix(matrix, 44), [3, 3])
    assertEquals(searchInSortedMatrix(matrix, 500), [-1, -1])

    assertEquals(searchInSortedMatrix2(matrix, 500), [-1, -1])
    assertEquals(searchInSortedMatrix2(matrix, 500), [-1, -1])
  },
})
