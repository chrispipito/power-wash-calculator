const calculate = require('../src/calculator');
describe('power washing price calculator', () => {
    test('returns 0 for 0 square feet', () => {
        expect(calculate(0)).toBe(0);
    })

    test('returns 15 for 100 sqaure feet', () => {
        expect(calculate(100)).toBe(15);
    });
});