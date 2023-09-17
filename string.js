// Métodos para manipular Strings:

// Replace() - serve para substituir um valor específico em uma string por outro valor. 
let frase = "Hoje é terça-feira"
let novaFrase = frase.replace('terça-feira','quarta-feira');
console.log(novaFrase); // saída: Hoje é quarta-feira

// Includes() - retorna true se o valor passado estiver contido na string.
let texto = "O araçari-de-bico-branco vive normalmente em grupos com cerca de 10 indivíduos ou mais, voando em fila indiana através de clareiras na floresta"
if (texto.includes("floresta")){
    console.log("A palavra -Floresta- aparece no texto");
}; // saída: A palavra -Floresta- aparece no texto

//indexOf() - retorna o primeiro índice em que o elemento pode ser encontrado
let exemplo = "Hello World"
let index = exemplo.indexOf("l");
console.log(index); // saída: 2
