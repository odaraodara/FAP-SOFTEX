class Estudante {
  constructor(nome, media) {
    this.nome = nome;
    this.media = media;
  }

  // Método getter para obter o nome do estudante
  get nomeEstudante(){
    return this.nome;
  }

  // Método setter para definir a média do estudante
  set mediaEstudante(nota){
    this.media = nota;
  }
}

let aluno1 = new Estudante("Fulano", 9);
console.log(`Usando o método getter eu recebo o nome do Estudante: ${aluno1.nomeEstudante}`);

aluno1.mediaEstudante = 10
console.log(`A média do estudante depois de alterada com o método get é: ${aluno1.media}`);
