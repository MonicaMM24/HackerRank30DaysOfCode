import java.io.*;
import java.util.*;

class Difference {
    private int[] elements;
    public int maximumDifference;

    // Constructor
    public Difference(int[] elements) {
        this.elements = elements;
    }

    // Method to compute maximum absolute difference
    public void computeDifference() {
        int max = Arrays.stream(elements).max().getAsInt();
        int min = Arrays.stream(elements).min().getAsInt();
        maximumDifference = Math.abs(max - min);
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] elements = new int[n];

        for (int i = 0; i < n; i++) {
            elements[i] = scanner.nextInt();
        }

        Difference d = new Difference(elements);
        d.computeDifference();
        System.out.println(d.maximumDifference);
    }
}