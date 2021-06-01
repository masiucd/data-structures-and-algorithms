import java.util.*;

class Program {
  public static int minNumberOfCoinsForChange(int n, int[] denoms) {
    int[] coins = new int[n + 1];
    Arrays.fill(coins, Integer.MAX_VALUE);
    coins[0] = 0;
    int toCompare = 0;

    for (int denom : denoms) {
      for (int i = 0; i < coins.length; i++) {
        if (denom <= i) {
          if (coins[i - denom] == Integer.MAX_VALUE) {
            toCompare = coins[i - denom];
          } else {
            toCompare = coins[i - denom] + 1;
          }
          coins[i] = Math.min(coins[i], toCompare);
        }
      }
    }

    return coins[n] != Integer.MAX_VALUE ? coins[n] : -1;
  }
}
