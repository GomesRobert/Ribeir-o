function countLetterA(str) {
    return (str.match(/a/gi) || []).length;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Informe uma string: ", (input) => {
    const count = countLetterA(input);
    
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
    
    readline.close();
});
