const calculate = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runCLI() {
    console.log('Welcome to the Power Washing Price Calculator!');

    rl.question('Enter the square footage to calculate the price: ', (squareFeet) => {
        const price = calculate(parseFloat(squareFeet));
        console.log(`The price for ${squareFeet} square feet is $${price.toFixed(2)}`);
        rl.close()
    })
}

runCLI()