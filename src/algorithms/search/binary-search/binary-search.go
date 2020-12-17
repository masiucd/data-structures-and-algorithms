package binarysearch

// BinarySearch algorithm
func BinarySearch(array []int, target int) int {
	start := 0
	end := len(array)-1
	middle := (start+end)/2

	for start < end {

		expected := array[middle]
		if expected == target {
			return middle
		}

		if expected > target {
			end = middle -1
			middle = (start+end)/2
			continue
		}
		
		start = middle + 1
		middle = (start+end)/2

	}


	return -1}
