package main

import (
	"fmt"
	"sort"
)

func twoNumberSum1(array []int, target int) []int {

	xs := []int{}
	for i := 0; i < len(array)-1; i++ {
		firstNum := array[i]
		for j := i + 1; j < len(array); j++ {
			secondSum := array[j]
			if firstNum+secondSum == target {
				xs = append(xs, firstNum, secondSum)
			}

		}
	}
	return xs
}

func twoNumberSum2(array []int, target int) []int {
	xs := []int{}

	nums := make(map[int]bool)

	for _, n := range array {
		r := target - n
		_, ok := nums[r]
		if ok == true {
			xs = append(xs, r, n)
		} else {
			nums[n] = true
		}
	}
	return xs
}
func twoNumberSum3(array []int, target int) []int {
	sort.Ints(array)

	left, right := 0, len(array)-1

	for left < right {
		current := array[left] + array[right]
		if target == current {
			return []int{array[left], array[right]}
		} else if current < target {
			left++
		} else if current > target {
			right--
		}
	}

	return []int{}
}

func main() {
	xs := []int{3, 5, -4, 8, 11, 1, -1, 6}
	res := twoNumberSum3(xs, 10)
	fmt.Println(res)
}
