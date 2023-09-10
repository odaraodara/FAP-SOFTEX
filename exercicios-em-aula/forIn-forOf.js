// 1 Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
console.log(` Exercício 01 
`);
const numeros = [3, 7, 2, 9, 5];

// usando For In
for (const index in numeros) {
  console.log(numeros[index]);
}

// usando For Of
for (const n of numeros) {
  console.log(n);
}

console.log("----------------")
// 2 Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. Utilize um laço "for...in"
// para iterar pelas chaves do objeto e calcular a soma de todos os valores.
console.log(` Exercício 02 
`);

const objeto = { a: 10, b: 20, c: 30, d: 40 };
let soma = 0;

for (index in objeto) {
  soma += objeto[index];
}
console.log(`a soma dos valores é ${soma}`);
console.log("----------------")
// 3 Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada número é par.
// Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares.
console.log(` Exercício 03 
`);

const num = [12, 5, 8, 21, 16, 7];
let pares = [];

for (item of num) {
  if (item % 2 === 0) {
    pares.push(item);
  }
}
console.log(pares);
console.log("----------------")
// 4 Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };
// Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.
console.log(` Exercício 04 
`);

const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

for (const item in estudantes) {
  if (estudantes[item] === 19) {
    console.log(`Estudante: ${item} - ${estudantes[item]} anos`);
  }
}
console.log("----------------")
// 5 Imagine que você tem uma matriz bidimensional representando uma grade de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ];
// Utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

console.log(` Exercício 05 
`);

const pontos = [
  [2, 5, 8],
  [3, 9, 12],
  [4, 6, 10],
];
let somaMatriz = 0;

// usando For Of
for (let linha of pontos) {
  for (let coluna of linha) {
    somaMatriz += coluna;
  }
}
console.log(`a soma dos elementos é = ${somaMatriz}`);

// usando For In
let sum = 0;

for (let linhas in pontos) {
  for (let colunas in pontos[linhas]) {
    sum += pontos[linhas][colunas]
  }
}
console.log(`a soma dos elementos é = ${sum}`);
