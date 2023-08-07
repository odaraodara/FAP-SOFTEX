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
get (posicao){
  if(posicao > -1){
    let atual = this.cabeca;
    let i = 0;

    while(atual !== null && i<posicao){
      atual = atual.proximo;
      i++

        if (atual !== null){
          return atual.valor
        } else{ return undefined;}
    }
  }else{
    return undefined;
  }
}
}