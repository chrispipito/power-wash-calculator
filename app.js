function calculatePrice(squareFeet) {
  // Use squareFeet in a simple calculation
  return squareFeet * 0.1;
}

// Make the function available for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculatePrice };
}
