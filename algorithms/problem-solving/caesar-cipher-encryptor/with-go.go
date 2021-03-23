package main


const AMOUNT_OF_LETTERS = 26

func CaesarCipherEncryptor(str string, key int) string {
	charList := []rune(str)
	shift, offset := rune(key%AMOUNT_OF_LETTERS), rune(AMOUNT_OF_LETTERS)
	for i, char := range charList {
		if char >= 'a' && char+shift <= 'z' {
			char += shift
		} else {
										char += shift - offset
		}
					charList[i] = char
	}
	return string(charList)
}