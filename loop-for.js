let pessoas = [
    {nome:"Davi", idade:30, profissao:"Arquiteto", cidade:"Recife"},
    {nome:"Alex", idade:29, profissao:"Médico", cidade:"Belo Horizonte"},
    {nome:"Carmen", idade:50, profissao:"Cantora", cidade:"João Pessoa"},
    {nome:"Silvia", idade:48, profissao:"Atriz", cidade:"São Paulo"},
];

for (const objeto of pessoas) {
    console.log(`Dados de ${objeto.nome}
    `)
    for ( propriedade in objeto) {
           console.log(`${propriedade}: ${objeto[propriedade]}`)         
        }
    console.log("-------------")
}

