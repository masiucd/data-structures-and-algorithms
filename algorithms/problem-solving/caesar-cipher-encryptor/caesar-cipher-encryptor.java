import java.util.*;
import java.util.stream.Collectors;

class Program {
  public String caesarCipherEncryptor(String input, int key) {

    ArrayList<Character> charList = new ArrayList<>();
    int amountOfChars = 26;
    int newKey = key % amountOfChars;
    for (int i = 0; i < input.length(); i++) {
      charList.add(this.charFn(input.charAt(i), newKey));
    }
    return charList.stream().map(String::valueOf).collect(Collectors.joining());
  }

  private char charFn(char c, int key) {
    int newCharCode = c + key;
    return newCharCode <= 122 ? (char) newCharCode : (char) (96 + (newCharCode % 122));
  }
}
