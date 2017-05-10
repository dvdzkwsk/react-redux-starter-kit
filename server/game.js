
/**
 * Объект хранит в себе все данные об игре
 */
module.exports = class Game {
  constructor(id, player1, player2) {
    this.id = id // id текущей игры
    this.player1 = { id: player1, symbol: 'x' } // socket Id игрока #1
    this.player2 = { id: player2, symbol: 'o' } // socket Id игрока #2
    this.turn = player1 // чей сейчас ход
    this.board = Array(9).fill('') // игровая доска
    this.status = 'started' // статус игры
  }

  /**
   * Делает ход
   * @returns {String} ошибка
   */
  makeMove(index, player) {
    switch (true) {
      // Проверяем на ошибки
      case (this.status !== 'started'):
        return 'Игра уже завершилась'
      case (this.turn !== player):
        return 'Сейчас не ваш ход'
      case (this.board[index] !== ''):
        return 'Сюда нельзя ходить'

      // Ходим
      case (player === this.player1.id):
        this.board[index] = this.player1.symbol
        this.turn = this.player2.id
        return null
      case (player === this.player2.id):
        this.board[index] = this.player2.symbol
        this.turn = this.player1.id
        return null
      default:
        return 'неизвестная ошибка'
    }
  }

  /**
   * Определяет победителя
   */
  getResult() {
    let result = null

    // перебираем выигрышные комбинации
    winningCombinations.some(combo => {
      const [a, b, c] = combo

      if (this.board[a] && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
        result = this.board[a]
        return true
      }
    })

    // проверяем на ничью
    const emptySquares = this.board.filter(square => square === '')
    if (emptySquares.length < 1 && !result) {
      result = 'full'
    }
    return result
  }
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
