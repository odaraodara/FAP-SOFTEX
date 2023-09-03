// desafio BlackJack

var readlineSync = require('readline-sync');

let banco1 = 2
let banco2 = 6
let banco3 = 10
let banco4 = 2
let somaBanco = banco1 + banco2 + banco3 + banco4

let carta1 = readlineSync.questionInt('valor da primeira carta: ');
let carta2 = readlineSync.questionInt('valor da segunda carta: ');
let soma = carta1 + carta2;

console.log(`A soma do banco é: ${somaBanco}`);
console.log(`A soma das suas cartas é: ${soma}`);


if(somaBanco < 21){
    if(soma <= 21 && soma > somaBanco){
        console.log("Você ganhou")
    } else {console.log ("O banco ganhou!")}
}else{
    if(soma <=21){
        console.log("Você ganhou!")
    }else(console.log("Você perdeu!"))
}