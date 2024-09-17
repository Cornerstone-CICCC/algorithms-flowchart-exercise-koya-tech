const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input the higth and weight Value by command-separated： ', (input) => {
    const values = input.split(',').map(value => value.trim());
    console.log("Area size ：", values[0] * values[1]);
    readline.close();
});