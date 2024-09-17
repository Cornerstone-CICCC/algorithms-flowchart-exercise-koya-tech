const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input the LFT Value： ', (input) => {
    let LCM = input * 30;
    console.log("LCM value：", LCM);
    readline.close();
});