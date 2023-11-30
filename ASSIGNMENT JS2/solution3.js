// Function to check if a number is positive, negative, or zero using a nested ternary operator
function checkNumberType(number) {
    let resultMessage =
        number > 0 ? "positive"
        : number < 0 ? "negative"
        : "zero";

    return resultMessage;
}

// Example usage
let inputNumber = 5;

// Call the function and store the result in a variable
let resultMessage = checkNumberType(inputNumber);

// Display the result
console.log(`The number ${inputNumber} is ${resultMessage}.`);
