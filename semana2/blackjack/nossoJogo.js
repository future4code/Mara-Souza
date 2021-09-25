/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")
 
 const jogoBlackJack = confirm("Quer iniciar uma nova rodada?, se sim, clique: Ok, se nao, clique: Cancel")
 if (jogoBlackJack) {
    console.log("Vamos Jogar!!")

    let jogador1 = comprarCarta()
    let jogador2 = comprarCarta()
    const somaDePontos = jogador1.valor + jogador2.valor
    console.log(`Cartas: ${jogador1.texto, jogador2.texto}, Pontos: ${somaDePontos}`)
    let jogadorComputador1 = comprarCarta()
    let JogadorComputador2 = comprarCarta()
    const somaDePontosComputador = jogadorComputador1.valor + JogadorComputador2.valor
    console.log(`Cartas: ${jogadorComputador1.texto, JogadorComputador2.texto}, Pontos: ${somaDePontosComputador}`)
   
    if (somaDePontos === somaDePontosComputador) {
       console.log("Empate")    
    } else if (somaDePontos > somaDePontosComputador) {
       console.log("O Usuário Ganhou!")
    } else if (somaDePontos < somaDePontosComputador) {
      console.log("O Computador Ganhou!")
    } else {
       console.log("O jogo Acabou")
    }
   }


