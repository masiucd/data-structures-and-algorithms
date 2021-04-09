package main

import (
	"fmt"
	"math"
	"sort"
)

// FindThreeLargestNumbers fn
func FindThreeLargestNumbers(array []int) []int {
	xs := array
	sort.Ints(xs)
	return xs[len(xs)-3:]
}

// FindThreeLargestNumbers2 fn withour sorting
func FindThreeLargestNumbers2(array []int) []int {
	three := []int{math.MinInt32, math.MinInt32, math.MinInt32}
	for _, n := range array {
		update(three, n)
	}

	return three
}

func update(array []int, n int) {
	if n > array[2] {
		shift(array, n, 2)
	} else if n > array[1] {
		shift(array, n, 1)
	} else if n > array[0] {
		shift(array, n, 0)
	}
}

func shift(array []int, n, index int) {
	for i := 0; i <= index; i++ {
		if i == index {
			array[i] = n
		} else {
			array[i] = array[i+1]
		}
	}
}

func main() {
	xs := []int{-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7}

	fmt.Println(FindThreeLargestNumbers2(xs))
}
