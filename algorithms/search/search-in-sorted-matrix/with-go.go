package main

// SearchInSortedMatrix func
func SearchInSortedMatrix(matrix [][]int, target int) []int {
	pair := []int{-1, -1}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == target {
				pair[0] = i
				pair[1] = j
			}
		}
	}
	return pair
}

// SearchInSortedMatrix2 func
func SearchInSortedMatrix2(matrix [][]int, target int) []int {
	row, col := 0, len(matrix[0])-1
	for row < len(matrix) && col >= 0 {
		if matrix[row][col] > target {
			col--
		} else if matrix[row][col] < target {
			row++
		} else {
			return []int{row, col}
		}
	}
	return []int{-1, -1}

}
