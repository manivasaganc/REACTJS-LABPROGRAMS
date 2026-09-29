const getMessage = require("./greet");

if (getMessage("Alice", 20) === "Hello Alice, you are 20 years old.") {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}