// objetos materiais:

class Lampada {
    constructor(marca,tipo,potencia){
        this.marca = marca;
        this.tipo = tipo;
        this.potencia = potencia;

        this.isLigado = false;
        this.cor = branca;
    }

   ligar(){
    this.isLigado = true;
    console.log("Lâmpada ligada!");
   } 

   desligar(){
    this.isLigado = false;
    console.log("Lâmpada desligada!");
   }

   mudarCor(cor){
    this.cor = cor;
    console.log(`Lâmpada setada para: ${cor}`);
   }
}

class Forno {
    constructor(marca,tipo,numBocas){
        this.marca = marca;
        this.tipo = tipo;
        this.numBocas = numBocas;

        this.isLigado = false;
        this.temp = 0;
    }

    ligar(){
        this.isLigado = true;
        console.log(`Seu forno está ligado!`);
    }
    desligar(){
        this.isLigado = false;
        console.log(`Seu forno está desligado!`);
    }
    ajustarTemperatura(temp){
        this.temp = temp;
        console.log(`A temperatura do seu forno é ${temp}`);
    }
}

// objetos abstratos:

class conta {
    constructor(titular, conta, ag){
        this.titular = titular;
        this.conta = conta;
        this.ag = ag;

        this.saldo = 0;
    }

    verSaldo() {
        console.log(`Seu saldo é de: ${this.saldo}`);
    }

    depositar(valor){
        this.saldo = this.saldo + valor
        console.log(`Seu novo saldo é de: ${this.saldo}`);
    }

    sacar(valor){
        this.saldo = this.saldo - valor
        console.log(`Seu novo saldo é de: ${this.saldo}`);
    }
}

class listaCompras {
    constructor(){
        this.lista = []
    }
    
    adicionarProduto(item){
        this.lista.push(item)
        console.log(`${item} adicionado com sucesso!`);
    }

    removerProduto(item){
        this.lista.splice(this.lista.indexOf(item),1)
        console.log(`${item} removido com sucesso!`);
    }

    exibirLista(){
        console.log(this.lista);
    }
}

const lista1 = new listaCompras;
lista1.adicionarProduto("mamão");
lista1.adicionarProduto("abacaxi");
lista1.adicionarProduto("pão");
lista1.exibirLista()
lista1.removerProduto("abacaxi")
lista1.exibirLista()