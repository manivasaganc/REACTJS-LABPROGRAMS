const isPrime = require('./prime');

describe('Prime Number Tests', () => {
    test('Should return false for numbers less than 2', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-5)).toBe(false);
    });

    test('Should return true for basic prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
    });

    test('Should return false for composite numbers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(15)).toBe(false);
        expect(isPrime(100)).toBe(false);
    });

    test('Should return true for larger prime numbers', () => {
        expect(isPrime(97)).toBe(true);
        expect(isPrime(7919)).toBe(true);
    });

    test('Should return false for larger composite numbers', () => {
        expect(isPrime(99)).toBe(false);
        expect(isPrime(8000)).toBe(false);
    });

    test('Should handle edge cases and non-integers correctly', () => {
        expect(isPrime(2.5)).toBe(false);
        expect(isPrime("5")).toBe(false);
        expect(isPrime(NaN)).toBe(false);
        expect(isPrime(Infinity)).toBe(false);
    });
});
