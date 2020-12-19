package main

import (
	"fmt"

	reversestring "github.com/masiuciszek/data-structures/src/algorithms/recursion/reverse-string"
	binarysearch "github.com/masiuciszek/data-structures/src/algorithms/search/binary-search"
	"github.com/masiuciszek/data-structures/src/algorithms/search/linear"
	uniqsort "github.com/masiuciszek/data-structures/src/algorithms/sort/uniq-sort"
	"github.com/masiuciszek/data-structures/src/memoization/factorial"
	timesten "github.com/masiuciszek/data-structures/src/memoization/times-ten"
)




func main()  {

	xs := []int{1,1,1,1,1,2,3}
	xs2 := []int{1,12,121,3321,11,42,3}
	xs3 := []int{1,2,3,4,5,6,7,8,9,10}
	fmt.Println(uniqsort.UniqSort(xs))

	fmt.Println(factorial.Fac(5))

	fmt.Println(timesten.TimesTen()(5))

	fmt.Println(linear.Linear(xs2,3))

	fmt.Println(binarysearch.BinarySearch(xs3,10))
	fmt.Println(reversestring.ReverseString("hello"))
}