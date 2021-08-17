// console.log("ola!")

// EXERCICIO DE INTERPRETACAO
/*EXERCICIO 1 - A = O SIMBOLO % EH O RESTO DA DIVISAO,
 ENTAO SE O NUMERO INFORMADO FOR DIVIDO POR DOIS, O RESTO PRECISA DAR 0*/
// EXERCICIO 1 - B = TIPOS DE NUMEROS PARES
// EXERCICIO 1- C = TIPOS DE NUMEROS IMPARES

// EXERCICIO 2 - A = PARA INFORMAR AO CLIENTE O VALOR DA FRUTA ESCOLIHDA POR ELE.
// EXERCICIO 2 - B = O preço da fruta MACA é  R$ 2.25
// EXERCICIO 2 - C = o sistema roda as informacoes contidas no default

// EXERCICIO 3 - A = PEDINDO QUE O USUSARIO INFORME O PRIMERO NUMERO
// EXERCICIO 3 - B = SE DIGITAR 10, ESSE NUMERO PASSOU NO TESTE. SE DIGITAR -10, DA ERRO.
// EXERICIO 3 - C = SIM, PORQUE O LET MENSAGEM DEVE ESTAR FORA DOS COLCHETES


const usuario = Number(prompt("Qual sua idade?"))
    if(usuario > 18) {
        console.log("Voce pode dirigir")
    } else {
    console.log("Voce nao pode dirigir")
    } 


    function periodo(M, V, N) {
        if (M) {
            console.log("Bom dia")
        } else if (V) {
            console.log("Boa tarde")
        } else if (N) {
            console.log("Boa noite")
        }  else {
            console.log("digite um valor valido")
        }
        }
        const respostaDoPeriodo = prompt("Em qual horario voce estuda? M (matutino), V (vespertino) ou N (Noturno)").toLocaleLowerCase()   
        periodo(respostaDoPeriodo)


    const periodoAluno = (aluno) => {
        switch(aluno) {
        case "M":
        console.log("Bom dia")
        break
        case "V":
            console.log("Boa tarde")
            break
        case "N":
            console.log("Boa noite")
            break
            default:
                console.log("escolha uma das opcoes indicadas")
    }
}
    const respostaAluno = prompt("Em qual horario voce estuda? M (matunino), V (vespertino), N (noturno)")
periodoAluno(respostaAluno)


function cinema(genero, valor) {
    if (genero  === "fantasia") {
        console.log("Bom Filme")
        } else if (valor < 15) {
        console.log("Bom filme")
    } else {
        console.log("Escolha outro filme")
    }
    }
    const perguntaGenero = prompt("Qual genero de filme voce deseja assistir?").toLowerCase()
    const perguntaValor = prompt("Qual o preco do ingresso?").toLowerCase()
    cinema(perguntaGenero, perguntaValor)