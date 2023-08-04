// Criar uma matriz bidimensional para armazenar informações sobre animais e as suas características. 
//(Nome, Classe, Expectativa de vida em anos)

let animais = [
    ["Leão","mamífero", 16],
    ["Tartaruga","réptil",150],
    ["Tubarão-branco","peixe",70],
    ["Arara-azul","ave",50],
    ["Sapo","anfíbio",15]
]





//imprimir item por item:

for(let l = 0; l< animais.length;l++){
    for (c=0; c< animais[l].length;c++){
        console.log(animais[l][c])
    }
}

