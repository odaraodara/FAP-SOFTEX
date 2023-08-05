class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista{
    constructor(){
        this.cabeca = null;
    }


adicionar (valor){
  const novoNo = new No(valor);

  // checar se já foi inicializado
  if(this.cabeca === null){
    this.cabeca = novoNo;
  }else{
    let atual = this.cabeca;
    while(atual.proximo !== null){
        atual = atual.proximo
    }
    atual.proximo = novoNo;
  }
}
}