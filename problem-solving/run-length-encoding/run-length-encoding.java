import java.util.*;

class Program {
  public String runLengthEncoding(String string) {
    StringBuilder chars = new StringBuilder();
    int count = 1;

    for (int i = 1; i < string.length(); i++) {
      char current = string.charAt(i);
      char prev = string.charAt(i - 1);

      if ((current != prev) || (count == 9)) {
        chars.append(Integer.toString(count));
        chars.append(prev);
        count = 0;
      }
      count += 1;
    }

    chars.append(Integer.toString(count));
    chars.append(string.charAt(string.length() - 1));
    return chars.toString();
  }
}
