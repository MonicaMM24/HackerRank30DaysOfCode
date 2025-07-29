
import java.util.*;

public class Solution {
    public static void main(String[] args) {

        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";

        int userInt;
        double userDouble;
        String userString;

        try (
        Scanner scanner = new Scanner(System.in)) {
            userInt = scanner.nextInt(); 
            userDouble = scanner.nextDouble(); 
            scanner.nextLine(); 
            userString = scanner.nextLine(); 

            System.out.println(i + userInt); 
            System.out.printf("%.1f\n", d + userDouble); 
            System.out.println(s + userString); 

            scanner.close();
        }
    }
}