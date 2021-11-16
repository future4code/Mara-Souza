


/*  EXEMPLO 0A */

function soma (num1, num2) {
    const resultado = num1 + num2
    return resultado
}
const calculo = soma(3, 4)
console.log(calculo)

/* EXEMPLO 0B */

function usuario (mensagem) {
    console.log(`${mensagem}`)
}

const pergunta = prompt("Escreva uma mensgem?")
usuario(pergunta)

/* EXERCICIO 1 */

function calculaAreaRetangulo(altura, largura) {
    const area = altura * largura
    console.log(area)
    }
              
    const alturaPrompt = Number(prompt("me informe a altura do triangulo"))
    const larguraPrompt = Number(prompt("me informe largura do triangulo"))
    calculaAreaRetangulo(alturaPrompt, larguraPrompt)


/* EXERCICIO 2*/

function idadeUsuario (anoAtual, anoNascimento) {
    const calculoIdade = anoAtual - anoNascimento
    console.log(`Sua idade eh ${calculoIdade} anos.`)
    }              
    
    const atual = Number(prompt("Qual eh o ano atual?"))
        const nascimento = Number(prompt("Em que ano vc Nasceu?"))
    idadeUsuario(atual, nascimento)

/* EXERCICIO 3*/

function calculoImc (peso, altura) {
    const imc = peso / (altura * altura)
        console.log(imc)
}
calculoImc(85, 1.8)
calculoImc(70, 1.65)

/* EXERCICIO 4 */

function dadosUsuario(nome, idade, email) {

       console.log(`meu nome é ${nome}, tenho ${idade} anos e meu e-mail é ${email}`)
    
}

const perguntaNome = prompt("Qual eh o seu nome?")
const perguntaIdade = prompt("Qual sua idade?")
const perguntaEmail = prompt("qual eh seu email?")
dadosUsuario(perguntaNome, perguntaIdade, perguntaEmail)

/*EXERCICIO 5*/

function imprimeCor() {
    const cor1 = prompt("informe uma cor favorita")
    const cor2 = prompt("informe uma outra cor favorita")
    const cor3 = prompt("informe uma outra cor favorita")
 const coresFavoritas=[cor1, cor2, cor3]
 console.log(coresFavoritas)
}


/* EXERCIO 6*/

function retornaStringMaiuscula(string) {
    const stringMaiuscula = string.toupperCase()
    return stringMaiuscula
}

/*EXERCICIO 7*/

function ingressoEspetaculo(custo, valorIngresso) {
    return custo/valorIngresso
}


/*EXERCICIO 8*/

function checaStringMesmoTamanho(string1, string2) {
    return string1.length === string2.length
 }

/*EXERCICIO 9*/

function retornaPrimeiroElemento(array) {
    return array[0]
}

/* EXERCICIO 10*/

function retornaUltimoElemento(array) {
    return array[array.length -1]

    /*EXERCICIO 11 */

    function trocaPrimeiroEUltimo(array) {
        const auxiliar = array[array.length -1]
        array[array.length -1] = array[0]
        aray[0] = auxiliar
        return array
    }

    /*EXERCICIO 12*/

    function checarIgualade(string1, string2) {
        return string1.tolowerCase() === string2.tolowerCase()
    }

    /*EXERCICIO 13*/

    function checaRenovacaoRg() {
        const anoAtual = Number(prompt("qual eh o ano atual"))
        const anoNascimento = Number(prompt("qual eh o ano do seu nascimento?"))
        const anoEmissao = Number(prompt("qual eh o ano de emissao da sua identidade"))
        
        const idade - anoAtual - anoNascimento
        const tempoDesdeEmissao = anoAtual - anoEmissao

        if (idade  < 20 && tempoDeEmissao >= 5) {
            console.log(true)
        }
        else if(idade >20 && idade <= 50 && tempoDesdeEmissao >=10) {
            console.log(true)
        }
        else if(idade > 50 && tempoDesdeEmissao >= 15) {
            console.log(true)
        }
    else {
        console.log(false)
    
    }
    
    }

    /* EXERCICIO 14*/

    function checaAnoBissexto(ano) {
        if (ano % 400 === 0) {
            return = true

        }
        else if (ano % 4 === 0 && !(ano % 100 === 0))
    return true
    }
else {
    return false
}
}