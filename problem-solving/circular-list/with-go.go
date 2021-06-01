package main

// CircularList func
func CircularList(xs []int, loops int) []int {
	res := []int{}
	for i := 0; i < loops*len(xs); i++ {
		circularIndex := i % len(xs)
		res = append(res, xs[circularIndex])
	}

	return res
}
