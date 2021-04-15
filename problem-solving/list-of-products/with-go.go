package main

// ArrayOfProducts func
func ArrayOfProducts(array []int) []int {
	xs := make([]int, len(array))
	for i := 0; i < len(array); i++ {
		curent := 1
		for j := 0; j < len(array); j++ {
			if i != j {
				curent *= array[j]
				xs[i] = curent
			}
		}
	}
	return xs
}

// ArrayOfProducts2 func
func ArrayOfProducts2(array []int) []int {
	products := make([]int, len(array))
	for i := range array {
		products[i] = 1
	}

	leftCurrentProduct := 1
	for i := range array {
		products[i] = leftCurrentProduct
		leftCurrentProduct *= array[i]
	}

	rightRunningProduct := 1
	for i := len(array) - 1; i > -1; i-- {
		products[i] *= rightRunningProduct
		rightRunningProduct *= array[i]
	}

	return products
}
