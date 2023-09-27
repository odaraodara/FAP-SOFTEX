var readlineSync = require("readline-sync");

// 1 - Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.

function saudacao() {
  console.log("Olá mundo!");
}
saudacao();

// 2 - Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console.

function dobro(num) {
  console.log(`O dobro de ${num} é ${num * 2}`);
}
dobro(3);

// 3 - Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir
//     todos os números inteiros no intervalo de inicio a fim (inclusive) no console.

function mostrarNumeros(inicio, fim) {
  if (fim > inicio) {
    for (i = inicio; i <= fim; i++) {
      console.log(i);
    }
  } else {
    for (i = inicio; i >= fim; i--) {
      console.log(i);
    }
  }
}
mostrarNumeros(15, 10);

// 4 - Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console
//     se o número é par ou não.

function verificarPar(num) {
  if (num % 2 == 0) {
    console.log(`${num} é par`);
  } else {
    console.log(`${num} não é par`);
  }
}
verificarPar(5);

// 5 - Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento
//     desse array no console, um por um

let l = [2, 4, 7, 8];

function imprimirLista(lista) {
  for (i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
imprimirLista(l);

// 6 - Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule
//     a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.

let notas = [8, 10, 4];

function calcularMedia(lista) {
  let soma = 0;
  for (i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  console.log(soma / lista.length);
}
calcularMedia(notas);

// 7 - Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior
//     número presente no array no console.

let numeros = [800, 20, 100];
function maiorNumero(lista) {
  maior = 0;
  for (i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  console.log(maior);
}
maiorNumero(numeros);

// 8 - Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas vogais
//     (a, e, i, o, u) ela contém. Exiba o resultado no console.

function contarVogais(texto) {
  let cont = 0;
  texto = texto.toLowerCase();

  for (i = 0; i < texto.length; i++) {
    if (
      texto.charAt(i) == "a" ||
      texto.charAt(i) == "e" ||
      texto.charAt(i) == "i" ||
      texto.charAt(i) == "o" ||
      texto.charAt(i) == "u"
    ) {
      cont++;
    }
  }
  console.log(`número de vogais: ${cont}`);
}

contarVogais("GoIABa");

// 9 - Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada
//     desse número de 1 a 10 no console.

let num = readlineSync.questionInt(
  "Digite um número para ver sua tabuada: "
);
function imprimirTabuada(num) {
  console.log(`Tabuada de ${num}`);
  for (i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

imprimirTabuada(num);

// 10 - Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console
//      se o número é primo ou não.

let numero = readlineSync.questionInt("Digite um número: ");
function verificarPrimo(numero) {
  let teste = 0;
  for (i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      teste++;
    }
  }
  if (teste == 2) {
    console.log(`${numero} é primo`);
  } else {
    console.log(`${numero} não é primo`);
  }
}

verificarPrimo(numero);
