/* global describe, test, expect */
const { calculatePrice } = require('../app');

describe('Power Wash Calculator Web App', () => {
  test('calculatePrice function exists', () => {
    expect(typeof calculatePrice).toBe('function');
  });
});
