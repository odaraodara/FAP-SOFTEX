
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

  // para add valor no início
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

// para imprimir lista
imprimir(){
  let atual = this.cabeca;
  while(atual){
    console.log(`Nome: ${atual.nome} - Idade: ${atual.idade}`);
    if(atual.filho){
      console.log(`Filho: ${atual.filho.nome}`);
    } else { console.log ("Sem filho");}

    atual = atual.filho
    }
  }
}

// criando novos nós:
const pessoa1 = new No ("Eunice", 100);
const pessoa2 = new No ("Dalva", 66);
const pessoa3 = new No ("Odara", 32);

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;

// add os nós a uma nova lista ligada

let lista = new ListaLigada();
lista.adicionar(pessoa1);
lista.adicionar(pessoa2);
lista.adicionar(pessoa3);

//imprimir a lista

lista.imprimir();





