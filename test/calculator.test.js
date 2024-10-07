describe('power washing price calculator', () => {
    test('returns 0 for 0 square feet', () => {
        expect(calculate(0)).toBe(0);
    })
})