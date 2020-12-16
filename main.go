package main

import (
	"fmt"

	uniqsort "github.com/masiuciszek/data-structures/src/algorithms/sort/uniq-sort"
)


func main()  {

	xs := []int{1,1,1,1,1,2,3}
	fmt.Println(uniqsort.UniqSort(xs))
}