// Function to check if a number is even or odd using the ternary operator
function checkEvenOrOdd(number) {
    // Ternary operator to check if the number is even or odd
    let result = (number % 2 === 0) ? "Even" : "Odd";
    return result;
}

// Example usage
let inputNumber = 15;

// Call the function and store the result in a variable
let resultMessage = checkEvenOrOdd(inputNumber);

// Display the result
console.log(`${inputNumber} is ${resultMessage}.`);
