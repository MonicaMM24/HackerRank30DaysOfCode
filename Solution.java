import java.util.*;

public class Solution {
    public static void main(String[] args) {
        // Given (already initialized in HackerRank editor)
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";

        // Step 1: Declare your variables
        int userInt;
        double userDouble;
        String userString;

        try (// Step 2: Read input
        Scanner scanner = new Scanner(System.in)) {
            userInt = scanner.nextInt(); // Read int
            userDouble = scanner.nextDouble(); // Read double
            scanner.nextLine(); // Consume newline
            userString = scanner.nextLine(); // Read full line of text

            // Step 3: Perform operations and print
            System.out.println(i + userInt); // int sum
            System.out.printf("%.1f\n", d + userDouble); // double sum, 1 decimal place
            System.out.println(s + userString); // string concatenation

            scanner.close();
        }
    }
}