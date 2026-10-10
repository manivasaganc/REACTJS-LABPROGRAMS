// Arrow function to check odd or even
const isOddOrEven = (num) => {
    if(num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

// Function to display the result
function checkNumber() {
    const number = Number(document.getElementById("number").value);
    const result = isOddOrEven(number);
    document.getElementById("result").innerHTML = `The number ${number} is ${result}.`;
}