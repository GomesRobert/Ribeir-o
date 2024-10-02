
//a) O próximo número é: 9
// b) O próximo número é: 128
// c) O próximo número é: 49
// d) O próximo número é: 100
// e) O próximo número é: 13
// f) O próximo número é: 20



function solveSequences() {
    // a) 1, 3, 5, 7, ___
    const aNext = 9; // sequência de números ímpares
    console.log(`a) O próximo número é: ${aNext}`);

    // b) 2, 4, 8, 16, 32, 64, ____
    const bNext = 128; // sequência de potências de 2 (2^1, 2^2, 2^3, ...)
    console.log(`b) O próximo número é: ${bNext}`);

    // c) 0, 1, 4, 9, 16, 25, 36, ____
    const cNext = 49; // sequência de quadrados perfeitos (0^2, 1^2, 2^2, ...)
    console.log(`c) O próximo número é: ${cNext}`);

    // d) 4, 16, 36, 64, ____
    const dNext = 100; // sequência de quadrados de números pares (2^2, 4^2, 6^2, ...)
    console.log(`d) O próximo número é: ${dNext}`);

    // e) 1, 1, 2, 3, 5, 8, ____
    const eNext = 13; // sequência de Fibonacci
    console.log(`e) O próximo número é: ${eNext}`);

    // f) 2, 10, 12, 16, 17, 18, 19, ____
    const fNext = 20; // sequênciaincluir alguns números primos e não primarios
    console.log(`f) O próximo número é: ${fNext}`);
}

solveSequences();

//a) O próximo número é: 9
// b) O próximo número é: 128
// c) O próximo número é: 49
// d) O próximo número é: 100
// e) O próximo número é: 13
// f) O próximo número é: 20