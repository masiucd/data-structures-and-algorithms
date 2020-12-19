package reversestring

import "testing"

func TestReverseString(t *testing.T) {
	str := "hello"
	res := ReverseString(str)
	expected := "olleh"
	if res != expected {
		t.Errorf("got %s but expected %s", res, expected)
	}
}
