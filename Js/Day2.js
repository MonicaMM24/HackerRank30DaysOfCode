function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * tip_percent / 100;
    const tax = meal_cost * tax_percent / 100;
    const total_cost = meal_cost + tip + tax;
    console.log(Math.round(total_cost));


}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
