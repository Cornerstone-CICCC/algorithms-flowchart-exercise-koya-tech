const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input the LFT Value： ', (input) => {
    if (input >= 80) {
        console.log("A")
    } else if (input >= 60) {
        console.log("B")
    } else if (input >= 40) {
        console.log("C")
    } else {
        console.log("NO GRADE")
    }
    readline.close();
});