package main

import "sort"

// ThreeNumberSum func
func ThreeNumberSum(array []int, target int) [][]int {
	sort.Ints(array)
	triplets := [][]int{}

	for i := 0; i < len(array)-2; i++ {
		left := i + 1
		right := len(array) - 1

		for left < right {
			currentSum := array[i] + array[left] + array[right]

			if currentSum == target {
				newTripplet := []int{array[i], array[left], array[right]}
				triplets = append(triplets, newTripplet)
				left++
				right--
			} else if currentSum < target {
				left++
			} else if currentSum > target {
				right--
			}
		}
	}

	return triplets
}
