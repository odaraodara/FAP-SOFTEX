
// implementando a classe Nó (menor estrutura da lista ligada) com os atributos que foram pedidos - Nome e idade. 

class No {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.filho = null; //considerando o próximo nó como o filho 
    }
}

// implementando a classe ListaLigada que define a estrutura e as operações necessárias para a manipulação da lista.

class ListaLigada {
  constructor() {
    this.cabeca = null;
  }

  // add valor no início
adicionar(pessoa){
   if(!this.cabeca){  // checar se já foi inicializado
    this.cabeca = pessoa;
  } else {
    let atual = this.cabeca;
    while(atual.filho){ // iterar para achar qual o último nó (onde o filho é nulo)
      atual = atual.filho;
    }
  atual.flho = pessoa;
  }
}

// imprimir lista
imprimir(){
  let atual = this.cabeca;
  while(atual){
    console.log(`Nome: ${atual.nome} - Idade: ${atual.idade}`);
    if(atual.filho){
      console.log(`Filho: ${atual.nome}`);
    } else { console.log ("Sem filho");}

    atual = atual.filho
    }
  }
}

// add as pessoas:







