package linear

import (
	"testing"

	"github.com/masiuciszek/data-structures/src/algorithms/search/linear"
)

// TestLinearSearch unit test
func TestLinearSearch(t *testing.T) {
	xs := []int{4, 2, 11, 23, 99, 45}

	target := 11
	given := linear.Linear(xs, target)

	target2 := 11000
	given2 := Linear(xs, target2)

	if given != 2 {
		t.Errorf("given was wrong got %d  but expected %d", given, 2)
	}

	if given2 != -1 {

		t.Errorf("given was wrong got %d  but expected %d", given, -1)

	}

}
