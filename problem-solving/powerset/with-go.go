package main

// Powerset func
func Powerset(array []int) [][]int {
	subset := [][]int{{}}

	for _, n := range array {
		size := len(subset)
		for i := 0; i < size; i++ {
			currentSubset := subset[i]
			newSubset := append([]int{}, currentSubset...)
			newSubset = append(newSubset, n)
			subset = append(subset, newSubset)
		}
	}

	return subset
}
