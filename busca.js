// Como os elementos do array não estão ordenados e a lista é pequena, vou usar a busca linar.

function buscaLinear (array,elementoBuscado) {
    for(i=0; i<array.length;i++){
        if (array[i] === elementoBuscado){
            return i
        }
    }
    // caso o elemento não seja encontrado, retorna -1
    return -1
}

const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const indice = buscaLinear(listaNumeros, elementoProcurado);

if(indice !== -1) {
    console.log(`O elemento ${elementoProcurado} está no índice ${indice}`);
} else{
    console.log(`O elemento ${elementoProcurado} não está na lista.`)
}