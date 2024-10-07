function calculate(squareFeet) {
    if (squareFeet < 0) {
        return 0;
    }
    return squareFeet * 0.15;
}

module.exports = calculate;