let banco = {
    conta: "00001",
    saldo: 100,
    tipo_conta: "corrente",
    agencia: "0001",

    buscarSaldo: function(){
        console.log(`Saldo: R$ ${this.saldo}`)
    },

    deposito: function(valor){
        this.saldo += valor
    },

    saque: function(valor){
        this.saldo -= valor
    },

    numConta: function(){
        console.log(`Sua conta ${this.tipo_conta}: ${this.conta} / ${this.agencia}`)
    }
}

banco.buscarSaldo() // retorna 100
banco.deposito(50) 
banco.buscarSaldo() // retorna 150
banco.saque(30)
banco.buscarSaldo() // retorna 120
banco.numConta() // retorna : Sua conta corrente: 00001 / 0001