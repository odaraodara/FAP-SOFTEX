var readlineSync = require('readline-sync');

// inicio da eleição

const candidatos = {
    x: 0,
    y: 0,
    z: 0
}
let branco = 0
let nulo = 0

// contar os votos

let rodar;
while (rodar != "fim") {

    let voto = readlineSync.questionInt('digite o código do seu candidato: ');

    switch (voto) {
        case 889: candidatos.x++
            break;
        case 847: candidatos.y++
            break;
        case 515: candidatos.z++
            break;
        case 0: branco++
        default: nulo++
    }

    rodar = readlineSync.question('digite "fim" se deseja finalizar a votação ')
}

// achar o vencedor

console.log('Resultado:');

if (candidatos.x > candidatos.y && candidatos.x > candidatos.z) {
    console.log('O candidato eleito é X');
} else if (candidatos.y > candidatos.x && candidatos.y > candidatos.z) {
    console.log('O candidato eleito é Y');
} else if (candidatos.z > candidatos.x && candidatos.z> candidatos.y) {
    console.log('O candidato eleito é Z');
}
else{
    console.log('Vamos para o segundo turno');
}
console.log(candidatos);
console.log('brancos:', branco, ', nulos:', nulo);


