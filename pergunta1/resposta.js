const readline = require('readline');

// Configurando a interface de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se o número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    while (a <= num) {
        if (a === num) {
            return true; // O número pertence à sequência
        }
        temp = a;
        a = b;
        b = temp + b;
    }
    
    return false; 
}

rl.question("Informe um número: ", (number) => {
    const num = parseInt(number);
    
    if (isNaN(num)) {
        console.log("Por favor, informe um número válido.");
    } else {
        if (isFibonacci(num)) {
            console.log(`O número ${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
        }
    }
    
    rl.close(); 
});
