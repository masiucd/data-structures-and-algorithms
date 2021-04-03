import java.util.*;

class Main {

   public static void main(String[] args) {
      System.out.println("x");
  }

  private List<Integer> convertIntArrayToList(int[] arr){
      List<Integer>xs = new ArrayList<>();
      for (int i: arr){
        xs.add(i);
      }
      return xs;
  }

  public int nonConstructibleChange(int[] coins) {
    List<Integer> coinsList = convertIntArrayToList(coins);
    Collections.sort(coinsList);

    int currentChange = 0;

    for (Integer coin: coinsList){
      if(coin > currentChange+1){
        return currentChange+1;
      }
      currentChange += coin;
    }
    return currentChange+1;
  }
}
