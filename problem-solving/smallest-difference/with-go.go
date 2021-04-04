package main

import (
	"fmt"
	"math"
	"sort"
)

// SmallestDifference func
func SmallestDifference(array1, array2 []int) []int {
	sort.Ints(array1)
	sort.Ints(array2)
	pointerOne, pointerTwo := 0, 0
	smallest, current := math.MaxInt32, math.MaxInt32
	smallestPair := []int{}

	for pointerOne < len(array1) && pointerTwo < len(array2) {
		numA := array1[pointerOne]
		numB := array2[pointerTwo]
		if numA < numB {
			current = numB - numA
			pointerOne++
		} else if numB < numA {
			current = numA - numB
			pointerTwo++
		} else {
			return []int{numA, numB}
		}
		if smallest > current {
			smallest = current
			smallestPair = []int{numA, numB}
		}
	}

	return smallestPair
}

func main() {
	xs1 := []int{-1, 5, 10, 20, 28, 3}
	xs2 := []int{26, 134, 135, 15, 17}
	fmt.Println(SmallestDifference(xs1, xs2))
}
