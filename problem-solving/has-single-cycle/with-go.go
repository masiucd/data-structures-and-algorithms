package main

// HasSingleCycle func
func HasSingleCycle(array []int) bool {
	numbersVisitedCount, currentIndex := 0, 0

	for numbersVisitedCount < len(array) {
		// Here we have done more then on cycle and we return false
		if numbersVisitedCount > 0 && currentIndex == 0 {
			return false
		}
		numbersVisitedCount++
		currentIndex = getNextIndex(array, currentIndex)
	}

	return currentIndex == 0
}

func getNextIndex(array []int, currentIndex int) int {
	jump := array[currentIndex]
	nextJumpInList := (currentIndex + jump) % len(array)
	if nextJumpInList >= 0 {
		return nextJumpInList
	}
	return nextJumpInList + len(array)
}
