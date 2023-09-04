var readlineSync = require('readline-sync');

// criar uma função tradicional sem parâmetro
function calculadora(){
  console.log(` *** Calculadora ***
  1 - soma
  2 - subtração
  3 - multiplicação
  4 - divisão`)
};

// criar uma função tradicional com parâmetro e que retorne um valor
function somar(num1, num2){
    return num1 + num2
};
function subtrair(num1,num2){
    return num1 - num2
};
function multiplicar(num1,num2){
    return num1 * num2
};
function dividir(num1,num2){
    return num1/num2
};

//criar uma arrow function com parâmetro e que retorne um valor
const calcular = () =>{

    let operador = readlineSync.questionInt("Digite o código da operação desejada: ");
    let num1 = readlineSync.questionInt("Digite o primeiro número: ");
    let num2 = readlineSync.questionInt("Digite o segundo número: ");
    let resultado;

        switch(operador){
            case 1: resultado = somar(num1,num2);
            operador = "+"
            break;
            case 2: resultado = subtrair(num1,num2);
            operador = "-"
            break;
            case 3: resultado = multiplicar(num1,num2);
            operador = "*"
            break;
            case 4: resultado = dividir(num1,num2);
            operador = "/"
        }   
    console.log(`${num1} ${operador} ${num2} = ${resultado}`)     
}

calculadora();
calcular();

