const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input the higth and weight Value by command-separated： ', (input) => {
    const values = input.split(',').map(value => value.trim()).map(Number);
    let maxValue = 0;
    for (let num of values) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    console.log("max Value ：", maxValue);
    readline.close();
});