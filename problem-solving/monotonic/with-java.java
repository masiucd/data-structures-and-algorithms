
public class withJava {

  public static boolean isMonotonic(int[] array) {
    boolean isNonDecreasing = true;
    boolean isNonIncreasing = true;

    for (int i = 1; i < array.length; i++) {
      int current = array[i];
      int previous = array[i - 1];

      if (current > previous) {
        isNonDecreasing = false;
      }
      if (current < previous) {
        isNonIncreasing = true;
      }

    }

    return isNonIncreasing || isNonDecreasing;
  }

}