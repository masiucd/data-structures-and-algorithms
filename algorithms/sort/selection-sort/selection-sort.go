package main

func SelectionSort(array []int) []int {
	currentIndex := 0;
	for currentIndex < len(array)-1{
		minIndex := currentIndex
		for i := currentIndex+1; i < len(array)-1; i++ {
			if(array[minIndex] > array[i]) {
				minIndex = i
			}
		}
		swap(currentIndex,minIndex,array)
		currentIndex++
	}
	return array
}


func swap(i,j int, array []int)  {
		array[i] ,array[j] = array[j] , array[i]
}