package main

import "math"

func SortedSquaredArray(array []int) []int {
	xs := []int{}

	for _, x := range array {
		squared := math.Sqrt(float64(x))
		xs = append(xs, int(squared))
	}

	return xs
}
