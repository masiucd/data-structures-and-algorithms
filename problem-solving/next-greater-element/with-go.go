package main

// NextGreaterElement func
func NextGreaterElement(array []int) []int {
	result := make([]int, len(array))
	stack := []int{}
	fillList(&result, -1)

	for i := 0; i < 2*len(array); i++ {
		circularIndex := i % len(array)

		for len(stack) > 0 && array[stack[len(stack)-1]] < array[circularIndex] {
			var topIndex int
			topIndex, stack = stack[len(stack)-1], stack[:len(stack)-1]
			result[topIndex] = array[circularIndex]
		}

		stack = append(stack, circularIndex)
	}

	return result
}

func fillList(xs *[]int, with int) {
	for i := range *xs {
		(*xs)[i] = with
	}
}
