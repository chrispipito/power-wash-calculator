/* global describe, test, expect */
const calculate = require('../src/calculator');

describe('power washing price calculator', () => {
    test('returns 0 for negative square footage', () => {
        expect(calculate(-10)).toBe(0);
    });

    test('applies minimum charge for very small jobs', () => {
        expect(calculate(10)).toBe(25);
        expect(calculate(166)).toBe(25);
    });

    test('calculates correct price for 167-500 square feet', () => {
        expect(calculate(167)).toBe(25.05);
        expect(calculate(250)).toBe(37.5);
        expect(calculate(500)).toBe(75);
    });

    test('calculates correct price for 501-1000 square feet', () => {
        expect(calculate(501)).toBe(75.20);
        expect(calculate(750)).toBe(125);
        expect(calculate(1000)).toBe(175);
    });

    test('calculates correct price for 1001+ square feet', () => {
        expect(calculate(1001)).toBe(175.25);
        expect(calculate(1250)).toBe(237.50);
        expect(calculate(1500)).toBe(300);
    });
});