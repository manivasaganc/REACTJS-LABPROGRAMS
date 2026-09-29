// Function to calculate the sum using reduce()
function findSum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

describe("Sum of Array using reduce()", () => {

    test("should return the correct sum for positive numbers", () => {
        expect(findSum([10, 20, 30, 40, 50])).toBe(150);
    });

    test("should return 0 for an empty array", () => {
        expect(findSum([])).toBe(0);
    });

    test("should return the same number for a single-element array", () => {
        expect(findSum([25])).toBe(25);
    });

    test("should correctly sum negative numbers", () => {
        expect(findSum([-10, -20, -30])).toBe(-60);
    });

    test("should correctly sum positive and negative numbers", () => {
        expect(findSum([10, -5, 20, -10])).toBe(15);
    });

});