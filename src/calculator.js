function calculate(squareFeet) {
    if (squareFeet < 0) {
        return 0;
    }

    if (squareFeet <= 500) {
        return squareFeet * 0.15;
    }
    return 75 + (squareFeet - 500) * 0.10;
}

module.exports = calculate;