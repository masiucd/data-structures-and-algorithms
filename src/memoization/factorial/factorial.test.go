package factorial

import "testing"

// TestFac unit test for the Factorial function
func TestFac(t *testing.T)  {
		res:=Fac(5) 
		if res != 120 {
			
			t.Errorf("Sum was incorrect, got: %d, want: %d.", res, 120)

		}
}