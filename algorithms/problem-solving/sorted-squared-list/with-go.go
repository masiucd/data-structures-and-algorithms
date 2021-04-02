package main

import (
	"fmt"
	"math"
	"sort"
)

// SortedSquaredArray func
func SortedSquaredArray(array []int) []int {
	xs := []int{}

	for _, x := range array {
		squared := math.Pow(float64(x), 2)
		xs = append(xs, int(squared))
	}

	sort.Ints(xs)
	return xs
}

// SortedSquaredArray2 func
func SortedSquaredArray2(array []int) []int {
	xs := make([]int, len(array))

	for index, num := range array {
		xs[index] = num * num
	}

	sort.Ints(xs)
	return xs
}

func main() {
	xs := []int{1, 2, 4, 6, 8, 9}
	res := SortedSquaredArray(xs)

	fmt.Println(res)
}
