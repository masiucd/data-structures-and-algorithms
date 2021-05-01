package main

// IsMonotonic func
func IsMonotonic(array []int) bool {
	isNonDecreasing, isNonIncreasing := true, true
	for i := 1; i < len(array); i++ {
		current, previous := array[i], array[i-1]
		if current > previous {
			isNonIncreasing = false
		}
		if current < previous {
			isNonDecreasing = false
		}
	}
	return isNonDecreasing || isNonIncreasing
}
