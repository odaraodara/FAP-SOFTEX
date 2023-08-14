// implementando a classe Nó (menor estrutura da lista ligada) com os atributos que foram pedidos - Nome e idade.

class No {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null; // considerando o próximo nó como o filho
  }
}

// implementando a classe ListaLigada que define a estrutura e as operações necessárias para a manipulação da lista.

class ListaLigada {
  constructor() {
    this.cabeca = null;
  }

  adicionar(nome, idade) {
    const novaPessoa = new No(nome, idade);

    if (!this.cabeca) {  // checar se já foi inicializado
      this.cabeca = novaPessoa;
    } else {
      let atual = this.cabeca;
      while (atual.filho) { // iterar para achar qual o último nó (onde o filho é nulo)
        atual = atual.filho;
      }
      atual.filho = novaPessoa;
    }
  }

  imprimir() {
    let atual = this.cabeca;
    while (atual) {
      console.log(`Nome: ${atual.nome} - Idade: ${atual.idade}`);
      if (atual.filho) {
        console.log(`Filho: ${atual.filho.nome}`);
      } else {
        console.log("Sem filho");
      }
      atual = atual.filho;
    }
  }
}

// criando uma nova lista, add nós e imprimindo: 

let lista = new ListaLigada();
lista.adicionar("Eunice", 100);
lista.adicionar("Dalva", 66);
lista.adicionar("Odara", 32);

lista.imprimir();