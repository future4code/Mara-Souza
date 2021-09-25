// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura = Number (prompt("qual sua altura em centimeros?"))
const largura = Number (prompt("me dê uma largura em centimetros"))
const retangulo = altura * largura
console.log(retangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = Number (prompt("Em que ano estamos?"))
const anoDoSeuNascimento = Number (prompt("Em que ano voce Nasceu?"))
const idade = anoAtual - anoDoSeuNascimento
console.log("Ola, hoje vc tem", idade, "anos")

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const quilos = Number (prompt("Quanto voce pesa?"))
const altura = Number (prompt("qual a sua altura?"))
const imc = (altura * altura)/quilos
console.log("Olá seu IMC atual é:", imc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt ("Qual é o seu nome?")
const idade = Number (prompt("Qual a sua idade?"))
const email = prompt ("Informe seu email:")
console.log("Olá, meu nome é", nome, "tenho", idade, "e meu email é:", email)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 const cor1 = prompt ("Cite uma cor:")
const cor2 = prompt ("Cite outra cor:")
const cor3 = prompt ("Cite mais uma cor:")
const resultadoCor = [cor1, cor2, cor3]
console.log(resultadoCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = "a esperanca para a árvore, que se for cortada, ainda se renovará... jó 14.7"
const fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const custo = 3800
const valorIngresso = 40
const vendasIngressos = custo / valorIngresso
console.log(vendasIngressos)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const listaDeCompras = ["carne", "ovo", "cenoura", "batata"]
  console.log(listaDeCompras[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const numeros = [1,2,3,4,5]
  console.log(numeros[4])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}