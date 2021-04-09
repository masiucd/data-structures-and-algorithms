import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class WithJava {

  private String splitToList(String input) {
    List<String> words = new ArrayList<String>();
    int firstLetter = 0;
    for (int i = 0; i < input.length(); i++) {
      char character = input.charAt(i);

      if (character == ' ') {
        words.add(input.substring(firstLetter, i));
        firstLetter = i;
      } else if (input.charAt(firstLetter) == ' ') {
        words.add(" ");
        firstLetter = i;
      }
    }
    words.add(input.substring(firstLetter));
    Collections.reverse(words);
    return String.join("", words);
  }

  public String reverseWordsInString(String string) {
    String stringArr = splitToList(string);

    return stringArr;
  }
}
