var readlineSync = require('readline-sync');

let valor1 = readlineSync.questionInt('Digite o primeiro número: ');
let valor2 = readlineSync.questionInt('Digite o segundo número: ');
let operacao = readlineSync.question('Digite o símbolo para a operação que deseja realizar: ');

switch(operacao){
    case "+": console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
    break;
    case "-":console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
    break; 
    case "*":console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
    break; 
    case "/": console.log(`${valor1} / ${valor2} = ${Math.floor(valor1 / valor2)} e sobra ${valor1%valor2}`);
    default: console.log("comece novamente e digite uma operação válida");
             console.log("+, -, * ou /");
}; 