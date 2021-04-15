import java.util.Arrays;

/**
 * WithJava
 */
public class WithJava {

  public static int[] smallestDifference(int[] arrayOne, int[] arrayTwo) {
    Arrays.sort(arrayOne);
    Arrays.sort(arrayTwo);
    int current = Integer.MAX_VALUE;
    int smallest = Integer.MAX_VALUE;
    int[] smallestPair = new int[2];
    int pointerA = 0;
    int pointerB = 0;

    while (pointerA < arrayOne.length && pointerB < arrayTwo.length) {
      int numA = arrayOne[pointerA];
      int numB = arrayTwo[pointerB];

      if (numA < numB) {
        current = numB - numA;
        pointerA++;
      } else if (numB < numA) {
        current = numA - numB;
        pointerB++;
      } else {
        return new int[] { numA, numB };
      }
      if (smallest > current) {
        smallest = current;
        smallestPair = new int[] { numA, numB };
      }
    }

    return smallestPair;
  }

}