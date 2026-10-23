const isOddOrEven = (num) => {
    return (num % 2 === 0) ? "Even" : "Odd";
};

console.assert(isOddOrEven(10) === "Even", "Test Case 1 Failed");
console.assert(isOddOrEven(7) === "Odd", "Test Case 2 Failed");
console.assert(isOddOrEven(0) === "Even", "Test Case 3 Failed");
console.assert(isOddOrEven(19) === "Odd", "Test Case 4 Failed");

console.log("All test cases passed!");