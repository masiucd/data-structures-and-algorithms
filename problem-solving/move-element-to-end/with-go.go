package main

// MoveElementToEnd func
func MoveElementToEnd(array []int, toMove int) []int {
	start, end := 0, len(array)-1

	for start < end {
		for start < end && array[end] == toMove {
			end--
		}
		if array[start] == toMove {
			swap(start, end, array)
		}
		start++
	}

	return array
}

func swap(i, j int, xs []int) {
	xs[i], xs[j] = xs[j], xs[i]
}
