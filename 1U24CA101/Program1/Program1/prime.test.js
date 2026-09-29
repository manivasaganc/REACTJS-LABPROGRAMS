// Import the student's function
const isPrime = require('./prime');
const assert = require('assert');

// Define test cases using const for unchanging data structures
const testCases = [
    { input: -5, expected: false, desc: "Negative numbers are not prime" },
    { input: 0, expected: false, desc: "Zero is not prime" },
    { input: 1, expected: false, desc: "One is not prime" },
    { input: 2, expected: true, desc: "Two is prime (only even prime)" },
    { input: 3, expected: true, desc: "Three is prime" },
    { input: 4, expected: false, desc: "Four is not prime" },
    { input: 11, expected: true, desc: "Eleven is prime" },
    { input: 15, expected: false, desc: "Fifteen is not prime" },
    { input: 23, expected: true, desc: "Twenty-three is prime" },
    { input: 100, expected: false, desc: "One hundred is not prime" }
];

// Track test results using let because the count changes
let passedTests = 0;

console.log("Running Prime Number Verification Tests...\n");

testCases.forEach((test, index) => {
    try {
        const result = isPrime(test.input);
        assert.strictEqual(result, test.expected);
        console.log(`✅ Test ${index + 1} Passed: ${test.desc} (Input: ${test.input})`);
        passedTests++;
    } catch (error) {
        console.error(`❌ Test ${index + 1} Failed: ${test.desc} (Input: ${test.input})`);
        console.error(`   Expected: ${test.expected}, but got: ${!test.expected}\n`);
    }
});

console.log(`\nResults: ${passedTests}/${testCases.length} tests passed.`);

// Exit with an error code if any test fails (useful for GitHub Actions CI)
if (passedTests !== testCases.length) {
    process.exit(1);
}
