class Calcular {
    constructor(){}   
    
   static arredondar(num){
        return Math.round(num)
    }
}

console.log(Calcular.arredondar(10.79));

//O método arredondar foi definido como estático usando a palavra-chave static. 
//Por isso é possível chamar diretamente na classe Calcular sem criar uma instância da classe.