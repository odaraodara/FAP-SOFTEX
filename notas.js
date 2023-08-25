var readlineSync = require('readline-sync');

//programa que informa se o aluno reprovou ou não:

let nota1 = readlineSync.questionInt('Digite a pimeira nota: ');
let nota2 = readlineSync.questionInt('Digite a segunda nota: ');
let nota3 = readlineSync.questionInt('Digite a terceira nota: ');

let media = (nota1 + nota2 + nota3)/3

let resultado = (media>=7) ? "aprovado" : "reprovado"

console.log(`Média: ${media} - Situação: ${resultado}`);

// programa que calcula a nota que o aluno precisa para passar:

let n1 = readlineSync.questionInt('Digite a primeira nota: ');
let n2 = readlineSync.questionInt('Digite a segunda nota: ');

let n3 = 21 - n2 - n1

if (n3<=10){
    console.log(`para passar com nota 7, você precisa tirar ${n3}`);
}else{
    console.log("você já está reprovado");
}

