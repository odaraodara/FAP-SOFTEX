var readlineSync = require('readline-sync');

let operacao = 1;
let num1;
let num2;

while (operacao != 0){
console.log("\nEscolha a operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n0. Sair");
operacao = readlineSync.questionInt('Digite o código de operação: ');


    if (operacao === 0) {
    console.log("Fim do programa.");
    break;
    }


    function calcular(num1,num2,operacao){
        num1 = readlineSync.questionFloat('digite o primeiro número: ');
        num2 = readlineSync.questionFloat('digite o segundo número: ');
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
resultado = calcular(num1,num2,operacao);
console.log(resultado);
}
