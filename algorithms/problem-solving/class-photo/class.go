package main

import (
	"fmt"
	"sort"
)

// ClassPhotos func
func ClassPhotos(redShirtHeights []int, blueShirtHeights []int) bool {

	sort.Ints(redShirtHeights)
	sort.Ints(blueShirtHeights)

	front:= []int{}
	back:= []int{}

	if redShirtHeights[len(redShirtHeights)-1] > blueShirtHeights[len(blueShirtHeights)-1] {
		front = redShirtHeights
	}else{
		front = blueShirtHeights
	}

	if redShirtHeights[len(redShirtHeights)-1] < blueShirtHeights[len(blueShirtHeights)-1] {
		back = redShirtHeights
	}else{
		back = blueShirtHeights
	}

	count:=0
	for i := range front {
		if front[i] > back[i] {
			count++
		}
	}

	return count == len(front)
}


func main(){
	 reds := []int{5, 8, 1, 3, 4}
 	blues := []int{6, 9, 2, 4, 5}
	res:= ClassPhotos(reds,blues)
	fmt.Println(res)
}