package main

import "fmt"

// BinarySearch algorithm
func BinarySearch(array []int, target int) int {
	start := 0
	end := len(array) - 1
	middle := (start + end) / 2

	for start < end {

		expected := array[middle]
		if expected == target {
			return middle
		}

		if expected > target {
			end = middle - 1
			middle = (start + end) / 2
			continue
		}

		start = middle + 1
		middle = (start + end) / 2

	}

	return -1
}

func BinarySearch2(array []int, target int) int {
	start := 0
	end := len(array) - 1

	for start <= end {
		middle := (start + end) / 2

		if array[middle] == target {
			return middle
		}
		if target < array[middle] {
			end = middle - 1
		}
		if target > array[middle] {
			start = middle + 1
		}

	}
	return -1
}

func binarySearchHelper(array []int, target, left, right int) int {
	if left > right {
		return -1
	}

	middle := (left + right) / 2
	expectedMatch := array[middle]
	if target == expectedMatch {
		return middle
	} else if target < expectedMatch {
		return binarySearchHelper(array, target, left, middle-1)
	}
	return binarySearchHelper(array, target, middle+1, right)
}

func BinarySearchRec(array []int, target int) int {
	return binarySearchHelper(array, target, 0, len(array)-1)
}

func main() {
	res := BinarySearchRec([]int{2, 3, 1, 8, 3, 2}, 2)
	fmt.Println(res)
}
