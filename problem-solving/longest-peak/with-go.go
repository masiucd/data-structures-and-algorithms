package main

import (
	"fmt"
)

func longestPeak(xs []int) int {
	longestPeak := 0
	i := 1

	for i < len(xs)-1 {
		isPeak := xs[i-1] < xs[i] && xs[i] > xs[i+1]
		if isPeak == false {
			i++
			continue
		}

		leftIndex := i - 2
		for leftIndex >= 0 && xs[leftIndex] < xs[leftIndex+1] {
			leftIndex--
		}

		rightIndex := i + 2
		for rightIndex < len(xs) && xs[rightIndex] < xs[rightIndex-1] {
			rightIndex++
		}

		currentPeak := rightIndex - leftIndex - 1
		if currentPeak > longestPeak {
			longestPeak = currentPeak
		}
		i = rightIndex

	}
	return longestPeak
}

func main() {
	list := []int{1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3}

	fmt.Println(longestPeak(list))
}
