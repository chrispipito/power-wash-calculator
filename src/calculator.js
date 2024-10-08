function calculate(squareFeet) {
    if (squareFeet < 0) {
        return 0;
    }

    const minimumCharge = 25;

    if (squareFeet <= 166) {
        return minimumCharge;
    }

    if (squareFeet <= 500) {
        return squareFeet * 0.15;
    }

    if (squareFeet <= 1000) {
        return 75 + (squareFeet - 500) * 0.20;
    }
    return 175 + (squareFeet - 1000) * 0.25;
}
module.exports = calculate;