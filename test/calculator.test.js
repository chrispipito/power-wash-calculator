const calculate = require('../src/calculator');
describe('power washing price calculator', () => {
    test('returns 0 for 0 square feet', () => {
        expect(calculate(0)).toBe(0);
    })

    test('returns 15 for 100 sqaure feet', () => {
        expect(calculate(100)).toBe(15);
    });

    test('calculates correct price for 1 to 500 square feet', () => {
        expect(calculate(1)).toBe(0.15);
        expect(calculate(250)).toBe(37.5);
        expect(calculate(500)).toBe(75);
    });

    test('calculates correct price for 501 to 1000 square feet', () => {
        expect(calculate(501)).toBe(75 + 0.10);
        expect(calculate(750)).toBe(75 + 25);
        expect(calculate(1000)).toBe(75 + 50);
    });
});