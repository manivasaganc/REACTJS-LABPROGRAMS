// Import the function
const toFahrenheit = require('./index');

// Test Case 1
test("0°C should be 32°F", () => {
    expect(toFahrenheit(0)).toBe(32);
});

// Test Case 2
test("10°C should be 50°F", () => {
    expect(toFahrenheit(10)).toBe(50);
});

// Test Case 3
test("20°C should be 68°F", () => {
    expect(toFahrenheit(20)).toBe(68);
});

// Test Case 4
test("30°C should be 86°F", () => {
    expect(toFahrenheit(30)).toBe(86);
});

// Test Case 5
test("100°C should be 212°F", () => {
    expect(toFahrenheit(100)).toBe(212);
});