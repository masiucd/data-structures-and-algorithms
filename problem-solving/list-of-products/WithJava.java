/**
 * WithJava
 */
public class WithJava {

  public int[] arrayOfProducts(int[] array) {
    int[] xs = new int[array.length];

    for (int i = 0; i < array.length; i++) {
      int current = 1;
      for (int j = 0; j < array.length; j++) {
        if (i != j) {
          current *= array[j];
          xs[i] = current;
        }
      }
    }

    return xs;
  }

  public int[] arrayOfProducts2(int[] array) {
    int[] xs = new int[array.length];

    int leftCurrentProduct = 1;
    for (int i = 0; i < xs.length; i++) {
      xs[i] = leftCurrentProduct;
      leftCurrentProduct *= array[i];
    }

    int rightCurrentProduct = 1;
    for (int i = xs.length - 1; i > -1; i--) {
      xs[i] *= rightCurrentProduct;
      rightCurrentProduct *= array[i];

    }

    return xs;
  }
}