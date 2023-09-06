enum Simbolo {
  X,
  O
}

class Player {
  constructor(readonly nome: string, readonly simbolo: Simbolo) {}
}

class Board {
  constructor(readonly tabuleiro = Array(9).fill(null)) {}

  fazerJogada(player: Player, index: number) {
    if (!this.tabuleiro[index]) {
      this.tabuleiro[index] = player.simbolo
      return true
    }
    return false
  }

  checkWin(player: Player) {
    const vitoriasPossiveis = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], //linhas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], //colunas
      [0, 4, 8],
      [2, 4, 6] //diagonais
    ]

    return vitoriasPossiveis.some((possibilidade) => {
      const [a, b, c] = possibilidade
      return (
        this.tabuleiro[a] === player.simbolo &&
        this.tabuleiro[b] === player.simbolo &&
        this.tabuleiro[c] === player.simbolo
      )
    })
  }

  checkEmpate() {
    return this.tabuleiro.every((cell) => cell !== null)
  }
}

class Game {
  board = new Board()
  players = [
    new Player('Jogador 1', Simbolo.X),
    new Player('Jogador2', Simbolo.O)
  ]
  currentPlayerIndex = 0
  gameOver = false

  fazerJogada(index: number) {
    if (!this.gameOver) {
      const currentPlayer = this.players[this.currentPlayerIndex]
      if (this.board.fazerJogada(currentPlayer, index)) {
        if (this.board.checkWin(currentPlayer)) {
          console.log(`${currentPlayer.nome} venceu!`)
          this.gameOver = true
        } else if (this.board.checkEmpate()) {
          console.log('Empate!')
          this.gameOver = true
        } else {
          this.currentPlayerIndex = 1 - this.currentPlayerIndex
          console.log(
            `${this.players[this.currentPlayerIndex].nome} é sua vez!`
          )
        }
      }
    }
  }
}

const jogo = new Board()
