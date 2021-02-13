package binarysearch

import (
	"testing"

	binarysearch "github.com/masiuciszek/data-structures/src/algorithms/search/binary-search"
)

func TestBinarySearch(t *testing.T) {
	xs := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 4
	outBound := len(xs) + 10
	expected := binarysearch.BinarySearch(xs, target)

	if expected != 3 {
		t.Errorf("Result was %d but expected %d", expected, target-1)
	}

	expected2 := BinarySearch(xs, outBound)
	if expected2 != -1 {
		t.Errorf("Result was %d but expected %d", expected2, -1)

	}
}
