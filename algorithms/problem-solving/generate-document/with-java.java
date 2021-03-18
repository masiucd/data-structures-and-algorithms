import java.util.*;

class Program {

  public boolean generateDocument(String characters, String document) {
    for (int i = 0; i < document.length(); i++) {
        char c = document.charAt(i);
        int documentFrequency = handleFrequencyCount(c,document);
        int countFrequency = handleFrequencyCount(c,characters);
        if(documentFrequency>countFrequency) return false;

    }

    return true;
  }

  public int handleFrequencyCount(char c, String target){
    int count = 0;
      for(int i = 0; i < target.length();i++){
        char strChar = target.charAt(i);
        if(strChar == c) count++;
      }

    return count;
  }


  public boolean generateDocument2(String characters, String document) {
    HashMap<Character,Integer> charsCount = new HashMap<>();
    for (int i = 0; i < characters.length(); i++) {
      char character = characters.charAt(1);
        charsCount.put(character, charsCount.getOrDefault(character, 0)+1);
    }


    for (int i = 0; i < document.length(); i++) {
        char character = document.charAt(i);
        if(!charsCount.containsKey(character) || charsCount.get(character) == 0) return false;
        charsCount.put(character, charsCount.get(character)-1);
    }

    return true;
  }
}
