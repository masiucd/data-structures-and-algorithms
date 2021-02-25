package main

import "fmt"

func bubleSort(array []int) []int {
	for i := 0; i < len(array); i++ {
		for j := 0; j < len(array)-1; j++ {
			if array[j] > array[j+1] {
				temp := array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
	return array
}

func bubbleSort2(xs []int) []int {
	isSorted := false
	count := 0
	for !isSorted {
		isSorted = true
		for i := 0; i < len(xs)-1-count; i++ {
			if xs[i] > xs[i+1] {
				swap(i, i+1, xs)
				isSorted = false
			}
		}
		count++
	}

	return xs
}

func swap(i, j int, xs []int) {
	temp := xs[i]
	xs[i] = xs[j]
	xs[j] = temp
}

func main() {
	xs := []int{1, 2, 9, 3, -2}
	res := bubbleSort2(xs)

	fmt.Println(res)
}
