const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the lengths of the three sides of the triangle you want to determine, separated by commas: ', (input) => {
    const values = input.split(',').map(value => value.trim()).map(Number);

    if (values.length !== 3 || values.some(isNaN)) {
        console.log("Please enter exactly three valid numbers.");
    } else {
        const [a, b, c] = values;

        const isValidTriangle = (a + b > c) && (a + c > b) && (b + c > a);

        console.log("TRUE or FALSE:", isValidTriangle);
    }

    readline.close();
});
