package main

import "fmt"

// ThreeNumberSort func
func ThreeNumberSort(array []int, order []int) []int {
	firstValue, secondValue := order[0], order[1]

	firstIndex, secondIndex, thirdIndex := 0, 0, len(array)-1

	for secondIndex <= thirdIndex {
		value := array[secondIndex]
		if value == firstValue {
			// then we swap
			array[firstIndex], array[secondIndex] = array[secondIndex], array[firstIndex]
			firstIndex++
			secondIndex++
		} else if value == secondValue {
			secondIndex++
		} else {
			array[secondIndex], array[thirdIndex] = array[firstIndex], array[secondIndex]
			thirdIndex--
		}
	}

	return array
}

func main() {
	array, order := []int{1, 0, 0, -1, -1, 0, 1, 1}, []int{0, 1, -1}
	res := ThreeNumberSort(array, order)
	fmt.Println(res)
}
