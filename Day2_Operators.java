import java.io.*;

class Result {

    /**
     * Calculates the total cost of a meal including tip and tax,
     * rounds it to the nearest integer, and prints the result.
     *
     * @param mealCost    The base cost of the meal
     * @param tipPercent  The percentage of the meal cost to add as a tip
     * @param taxPercent  The percentage of the meal cost to add as tax
     */
    public static void solve(double mealCost, int tipPercent, int taxPercent) {
        // Calculate tip and tax amounts
        double tip = mealCost * tipPercent / 100.0;
        double tax = mealCost * taxPercent / 100.0;

        // Total meal cost
        double totalCost = mealCost + tip + tax;

        // Round to nearest integer
        int roundedTotal = (int) Math.round(totalCost);

        // Output the result
        System.out.println(roundedTotal);
    }
}

public class Day2_Operators {
    public static void main(String[] args) throws IOException {
        try (BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in))) {
            double mealCost = Double.parseDouble(bufferedReader.readLine().trim());
            int tipPercent = Integer.parseInt(bufferedReader.readLine().trim());
            int taxPercent = Integer.parseInt(bufferedReader.readLine().trim());

            Result.solve(mealCost, tipPercent, taxPercent);
        } catch (NumberFormatException e) {
            System.err.println("Invalid number format. Please enter valid numeric values.");
        } catch (IOException e) {
            System.err.println("An I/O error occurred.");
        }
    }
}