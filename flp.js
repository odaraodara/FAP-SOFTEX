// Na fila, com o método .shift(), são removidos os elementos que estão na frente (elementos de índice 0).
// a sequencia dos removidos é: 3,7,9,1,0

let fila = [3, 7, 9, 1, 0];

for (i = 0; i <= fila.length + 1; i++) {
    fila.shift();
    console.log(fila);
}

// Na lista, com o método .splice(), é possível remover um elemento específico de acordo com o seu índice. 
// a sequencia varia de acordo com o índice

let lista = [3, 7, 9, 1, 0];

for (x = lista.length; x>=0 ; x--) {
    lista.splice(x);
    console.log(lista);
}

// Na pilha, com o método .pop(), o último elemento da pilha é removido.
// a sequencia dos removidos é: 0,1,9,7,3

let pilha = [3, 7, 9, 1, 0];
for (let z = 0; z <= pilha.length +1 ; z++) {
    pilha.pop()
    console.log(pilha); 
}
