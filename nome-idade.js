var readlineSync = require('readline-sync');

let rodar = true;

while (rodar) {
    try {
        let nome = readlineSync.question('Nome:');
        let ano = readlineSync.questionInt('Ano de nascimento:');

        if (ano > 1922 && ano < 2022) {
            console.log("Nome:", nome);
            console.log("Sua idade em 2023:", 2023 - ano);
            rodar = false
        }

    } catch (error) {
        console.log("Erro:", error)

    }
}
