// EXERCICIO 1 A - VAI IMPRIMIR TUDO QUE ESTA DENTRO DO ARRAY USUARIOS
// EXERCICIO 2 A - VAI IMPRIMIR AS INFORMACOES DE NOME DE TODOS OS USUARIOS DA ARRAY
// EXERCICIO 3 A - VAI IMPRIMIR TODOS AS APELIDOS DO ARRAY MENOS O CHIJO


/*Crie um novo array apenas com os cachorros salsicha 0 e o 3*/

function petShop(cachorro) {
    return cachorro.nome
    }

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
     const nomeDosDoguinhos = pets.map(petShop)
     console.log(nomeDosDoguinhos)

/*Crie um novo array apenas com os cachorros salsicha*/
    
    function cachorroSalsicha(salsichinha) {
        return salsichinha.raca === "Salsicha"
    }
    
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ]
   
        const doguinhosSalsicha = pets.filter(cachorroSalsicha)
console.log(doguinhosSalsicha)

/* Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */


 function petShop(poodles, index, array) {
    return poodles.raca === "Poodle"
    }

    const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
     const mensagemPoodles = pets.filter((poodles, i, array) => {
         return poodles.raca === "Poodle"})
         const poodle1 = mensagempoodles[2].nome
          console.log(`Você ganhou um cupom de desconto de 10% para tosar`)

        /*  //a) Crie um novo array que contenha apenas o nome de cada item */

        function extrairNome(mercado) {
            return mercado.nome 
            }
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
         ]

        const nomeItens = produtos.map(extrairNome)
    console.log(nomeItens)
    

    /* Crie um Novo array que contenha um objeto com o nome e o preço de cada item */

        function extrairNome(mercado, i, array) {
            return mercado.categoria
            }
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
         ]

            const bebida = produtos.filter((mercado) => {return mercado.categoria === "Bebidas"}
            )
            console.log(bebida)
            

        //Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

        function produtoYpe(mercado, i, array) {
                return mercado.nome
                }

        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
         ]
          
         
         const somenteYpe = produtos.filter((mercado, i, array) => {
            return mercado.nome === "Ypê"}
            )
   console.log(somenteYpe)

  
  
   

   


