/*EXERCICIO 1*/



/*EXERCICIO 2*/

/* a-) 1==='1' = FALSE

b-) 1 =='1'

c-) 'a'==='b' = true

d-) 'b'>'a' = TRUE

 e-) 0!==null = TRUE */

/* EXERCICIO 3*/


function cadastroDeUsuario() {
    const nome = prompt("qual eh o seu nome?")
    const anoNascimento = Number(prompt("qual eh o ano do seu nascimento?"))
    const senha = Number(prompt("Informe uma senha de 6 caracteres"))
    const nacionalidade = prompt("qual sua nacionalidade?")
    
       if (anoNascimento >= 18 && senha.length >5 && nacionalidade === "brasileiro") {
          cadastroDeUsuario.push()
    }
          console.log(`${nome} cadastrado com sucesso`)
}

/* EXERCICIO 4 */

const login = () => {
    const login = "labenu"
const senhaUsuario = prompt("digite uma senha")
    if (login === senha){
        console.log("usuario logado")
    }else {
        console.log("senha invalida")
    }
}

console.log(login())

/* EXERCICIO 5 */

const primeiraDose = () => {

    let tempo = ""
    let data = ""
const nome = prompt("informe seu nome")
const vacina = prompt("Informe a vacina que voce tomou?")

if(vacina === "cononaVac") {
tempo = 28
data = "28/09/2021"
}
 else if(vacina === "Astrazenica") {
    tempo = 90
    data = "01/12/2021"
}
if(vacina === "Pfizer") {
    tempo = 90
    data = "01/12/2021"
}
}

console.log(primeiraDose())

/* exercicio 6 */

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        {nome: "mara", imunizacao: "incompleta"},
        {nome: "pedro", imunizacao: "incompleta"},
        {nome: "joao", imunizacao: "incompleta"},
        
            ]
            const acheiAPessoa = usuarios.filter((usuario)=> {
                console.log(usuarios.nome)
        if (usuario.nome ==== nomeDoUsuario)
        usuario.imunizacao = 'completa'
        return usuario.nome
            })
            return segundaDose
}
console.log(segundaDose("Barbara"))