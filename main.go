package main

import (
	"fmt"

	uniqsort "github.com/masiuciszek/data-structures/src/algorithms/sort/uniq-sort"
	"github.com/masiuciszek/data-structures/src/memoization/factorial"
	timesten "github.com/masiuciszek/data-structures/src/memoization/times-ten"
)


func main()  {

	xs := []int{1,1,1,1,1,2,3}
	fmt.Println(uniqsort.UniqSort(xs))

	fmt.Println(factorial.Fac(5))

	fmt.Println(timesten.TimesTen()(5))
}