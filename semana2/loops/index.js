// //EXERCICIO 1 = O VALOR IMPRESSO EH 10. 
// //EXERCICIO 2 - A = VAI IMPRIMIR OS NUMEROS MAIORES QUE 18.
// //EXERCICIO 2 - B = NAO É SUFICIENTE, EH NECESSARIO USAR let linha = ""
// //EXERCICIO 3 - VAI IMPRIMIR 4 LINHAS, CONTENDO EM CADA UM A QUANTIDADE DE * CORRESPONDENTE


      const bichinhos = Number(prompt("Ola, quantos bichos de estimacao vc tem?"))
    let quantosBichinhos = []
    
        if (bichinhos === 0) {
            console.log("que pena, vc pode adotar um pet")
        }

        for (i = 0; i < bichinhos; i++) {
            const nomeBichinhos = prompt("Qual o nome dos bichinhos?")
            quantosBichinhos.push(nomeBichinhos)
        }
        console.log(quantosBichinhos)
    
    
      