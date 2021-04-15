package main

// FirstDuplicateValue func
func FirstDuplicateValue(array []int) int {
	currentMinIndex := len(array)

	for i := 0; i < len(array); i++ {
		current := array[i]
		for j := i + 1; j < len(array); j++ {
			valueToCompareWith := array[j]
			if current == valueToCompareWith {
				currentMinIndex = min(currentMinIndex, j)
			}
		}
	}

	if currentMinIndex == len(array) {
		return -1
	}
	return array[currentMinIndex]
}

// FirstDuplicateValue2 func
func FirstDuplicateValue2(array []int) int {
	nonSeenNumbers := make(map[int]bool)

	for _, num := range array {
		if nonSeenNumbers[num] {
			return num
		}
		nonSeenNumbers[num] = true
	}
	return -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
