var readlineSync = require('readline-sync');

let num1 = readlineSync.questionFloat('digite o primeiro número: ');
let num2 = readlineSync.questionFloat('digite o segundo número: ');
console.log("\nEscolha a operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão");
let operacao = readlineSync.questionInt('Digite o código de operação: ');

function calculadora(num1,num2,operacao){
    switch(operacao){
        case 1: return num1 + num2
            break;
        case 2: return num1 - num2
            break;
        case 3: return num1 * num2
            break;
        case 4: return num1 / num2
            break;
        default: return 0
    }
}
resultado = calculadora(num1,num2,operacao);
console.log(resultado);
