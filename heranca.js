// Classe Mãe
class Pessoa{
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf = cpf;
    }

    saudar(){
        console.log(`Olá ${this.nome}!`);
    }
}

// Classe Filha
class Funcionario extends Pessoa{
    constructor(nome,cpf,cargo,salario){
        super(nome,cpf);
        this.cargo = cargo;
        this.salario = salario;
    }
}

// criando uma instância de Funcionário:
const funcionario = new Funcionario('Fulano','00000000000','Técnico Artes', 2000)

funcionario.saudar();