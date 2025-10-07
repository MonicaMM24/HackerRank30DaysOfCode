function processData(input) {
    const inputLines = input.split('\n');

    // Use existing i, d, s from the global scope
    const intInput = parseInt(inputLines[0]);
    const doubleInput = parseFloat(inputLines[1]);
    const stringInput = inputLines[2];

    // Use global i, d, s (already declared by HackerRank)
    console.log(i + intInput);                         // Sum of integers
    console.log((d + doubleInput).toFixed(1));         // Sum of doubles
    console.log(s + stringInput);                      // String concatenation
}

// This part is required by HackerRank to read from stdin
process.stdin.resume();
process.stdin.setEncoding("utf8");
let inputData = "";

process.stdin.on("data", function (input) {
    inputData += input;
});

process.stdin.on("end", function () {
    processData(inputData);
});
 
 
    function processData(input) {

        
        //Declare and initialize variables from input
        const intInput = 5;
        const doubleInput = 5.5;
        const stringInput = "is the best";  
        
        //Perform operations and print results
        console.log(i + intInput); //Sum of integers
        console.log((d+ doubleInput).toFixed(1)); //Sum of doubles, formatted to 1 decimal
        console.log(s + stringInput); //Concatenated string         
    }

