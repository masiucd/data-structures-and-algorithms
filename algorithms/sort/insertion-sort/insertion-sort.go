package main

import "fmt"

func swap(i, j int, array []int) {
	array[i], array[j] = array[j], array[i]
}

func InsertionSort(array []int) []int {
	for i := 1; i < len(array); i++ {
		j := i
		for j > 0 && array[j] < array[j-1] {
			swap(j, j-1, array)
			j--
		}
	}

	return array
}

func main() {
	xs := []int{3, 2, 100, 1}

	res := InsertionSort(xs)
	fmt.Println(res)
}
