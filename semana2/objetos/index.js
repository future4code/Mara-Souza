// console.log("ola")

// exercicio de interpretacao //

// 1 resposta A = mateus Nastergale, 1 resposta B = Virginia Cavendish, 1 resposta C = canal: "Globo", horario: "14h" //

/* 2 resposta A = imprime os dados do cachorro, os dados do gato (com seu nome), os dados da tartaruga,
sendo trocado a letra a por o, a tartaruga se chama jubo*/

// 2 resposta B = copia os dados do objeto informado //

// 3 resposta A = vai imprimir os dados da pessoa e no backender como falso, Underfined na altura //

/* 3 resposta B foi impresso os dados pedidos, informado que eh falso como backender e underfined na altura
 pq nao foi informado este valor */

 const pessoa = {
    nome: "Maria",
    apelido: ["mamae", "Mary", "Ma"]
}
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}`)

 const maisApelidos = {
     ...pessoa,
     apelido: ["Mia", "Mari", "Mar"]
 }
 const todosOsApelidos = [pessoa.apelido, maisApelidos.apelido]
 console.log(todosOsApelidos)

 const pessoa1 = {

    nome: "Pedro",
    idade: 12,
     profissao: "Estudante"
 
 }
 /console.log(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)


 /const pessoa2 = {

    nome: "Joao",
    idade: 22,
     profissao: "engenheiro"
 
 }
 console.log(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)





 
 






