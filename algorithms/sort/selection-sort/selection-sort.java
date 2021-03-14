import java.util.*;

class Program {
  public static int[] selectionSort(int[] array) {
    int currentIndex = 0;
    while (currentIndex < array.length-1) {
        int minIndex = currentIndex;
        for(int i = currentIndex+1; i < array.length;i++){
          if(array[minIndex] > array[i]) minIndex = i;
        }
        swap(currentIndex, minIndex, array);
        currentIndex++;
    }
    return array;
  }
  public static void swap(int i, int j, int[] array ){
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
