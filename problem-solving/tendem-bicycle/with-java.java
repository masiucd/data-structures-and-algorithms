import java.util.Arrays;

public class WithJava {
  public int tandemBicycle(int[] reds, int[] blues, boolean fastest) {

    Arrays.sort(reds);
    Arrays.sort(blues);

    if (!fastest) {
      this.reverse(reds);
    }

    int result = 0;
    for (int i = 0; i < reds.length; i++) {
      int rider1 = reds[i];
      int rider2 = blues[blues.length - i - 1];
      result += Math.max(rider1, rider2);
    }

    return result;
  }

  private void reverse(int[] xs) {
    int start = 0;
    int end = xs.length - 1;

    while (start < end) {
      int temp = xs[start];
      xs[start] = xs[end];
      xs[end] = temp;
      start++;
      end--;
    }
  }
}
