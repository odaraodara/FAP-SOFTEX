    let nome; // String
    let salario; // Number
    let idade;  // Number
    let diploma; // Boolean

    function cadastro (nome,salario,idade,diploma){
        console.log('*** CADASTRO ***');
        console.log(`Nome: ${nome}`);
        console.log(`Salário: ${salario}`);
        console.log(`Idade: ${idade}`);
        console.log(`Diploma: ${diploma}`);
    }    

  cadastro("Fulano", 2500, 31, true);