var readline = require("readline-sync");

try {
  let valorTotal = readline.questionFloat(
    "Digite o valor do boleto a ser pago: "
  );
  let parcelas = readline.questionInt(
    "Digite em quantas parcelas você quer dividir: "
  );

  let valorParcela = valorTotal / parcelas;

  if (parcelas === 0) {
    throw new Error("não é permitido divisão por 0");
  }

  console.log(`você vai pagar ${parcelas} parcelas de R$ ${valorParcela}.`);
} catch (error) {
  console.error(`Ocorreu um erro: ${error.message}`);
} finally {
  console.log("saindo do sistema...");
}
