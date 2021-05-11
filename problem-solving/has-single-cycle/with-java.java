import java.util.*;

class Program {
  public static boolean hasSingleCycle(int[] array) {
    int amountOfVisited = 0;
    int currentIndex = 0;

    while (amountOfVisited < array.length) {
      if (amountOfVisited > 0 && currentIndex == 0) {
        return false;
      }
      amountOfVisited++;
      currentIndex = getNextIndex(array, currentIndex);
    }
    return currentIndex == 0;
  }

  public static int getNextIndex(int[] array, int currentIndex) {
    int jump = array[currentIndex];
    int nextJumpValue = (jump + currentIndex) % array.length;
    return nextJumpValue >= 0 ? nextJumpValue : nextJumpValue + array.length;
  }
}
