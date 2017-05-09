/**
 * Настройки порта и хоста
 */
const project = require('../config/project.config')
const HOST = project.server_host
const PORT = project.server_port

const Game = require('./game')

let uniqueId = 0 // Глобальный уникальный id
let games = [] // Массив содержит все игровые сессии

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`пользователь ${socket.id} подключился`)

    // =====================================================
    //
    //     Events связанные с установкой соединения
    //
    // =====================================================

    /**
     * Первый игрок создает комнату и генерирует ссылку для инвайта
     */
    socket.on('createNewGame', () => {
      const thisGameId = uniqueId++

      const inviteLink = `http://${HOST}:${PORT}/?gameId=${thisGameId}`

      socket.emit('newGameCreated', { inviteLink: inviteLink, gameId: thisGameId })
      socket.join(thisGameId.toString())
    })

    /**
     * Второй игрок подключается к комнате
     */
    socket.on('joinGame', (data) => {
      const { gameId } = data
      const game = games.find(g => g.id === gameId)
      let room = io.sockets.adapter.rooms[gameId]

      // не должно быть игровой сессии с таким gameId
      // В комнате должно быть не больше двух человек
      if (!game && room && room.length < 2) {
        socket.join(gameId)

        // Запускаем игру
        startGame(io, gameId, room)
      } else {
        io.to(socket.id).emit('connectionError', { error: 'Ссылка устарела' })
      }
    })

    /**
     * Эвент срабатывает при отключении пользователя
     */
    socket.on('disconnect', () => {
      console.log(`пользователь ${socket.id} отсоединился`)

      abortGame(io, socket.id)
    })

    // =====================================================
    //
    //     Events связанные с процессом игры
    //
    // =====================================================

    socket.on('makeMove', (data) => {
      const { gameId, squareIndex } = data
      const index = games.findIndex(g => g.id === gameId)
      const game = games[index]

      if (game) {
        makeMove(io, game, squareIndex, socket.id)
      } else {
        io.to(socket.id).emit('error', { error: `Игра #${gameId} не найдена` })
      }
    })
  })
}

/**
 * Создает игровую сессию и запускает игру
 */
function startGame(io, gameId, room) {
  const players = Object.keys(room.sockets)

  // Создаем объект, где будут храниться все данные об игре
  const game = new Game(gameId, players[0], players[1])
  games.push(game)

  // Уведомляем о начале игры всех пользователей
  io.to(gameId).emit('gameStarted', { gameId: gameId, board: game.board })
  turnAlert(io, game.player1.id, game.player2.id, null)
}

/**
 * Прерывает любую незавершенную игру, где находился player
 */
function abortGame(io, player) {
  const gameStatus = 'aborted'
  const index = games.findIndex(g => g.player1.id === player || g.player2.id === player)

  // уведомляем пользователей о завершении игры
  if (index > -1) {
    games[index].status = gameStatus
    io.to(games[index].id).emit('gameOver', { gameResult: 'disconnect', status: 'Игра окончена' })
  }
}

/**
 * Корректно завершаем игру
 */
function completeGame(io, game) {
  game.status = 'complete'
  io.to(game.id).emit('updateStatus', { status: 'Игра окончена', soundAlert: 'gameComplete' })
}

/**
 * Пытается сделать ход и выявить победителя
 */
function makeMove(io, game, index, player) {
  // делаем ход
  const error = game.makeMove(index, player)

  if (error) {
    // отправляем ошибку пользователю
    io.to(player).emit('error', { error: error })
  } else {
    // пробуем определить победителя
    const gameResult = game.getResult()

    // Завершаем игру, если определен победитель
    // else Уведомляем игроков чей сейчас ход
    if (gameResult) {
      completeGame(io, game)
    } else if (game.turn !== player) {
      turnAlert(io, game.turn, player)
    }

    io.to(game.id).emit('moveIsMade', { board: game.board, gameResult: gameResult })
  }
}

/**
 * Уведомляем playerTurn, что сейчас его ход
 * Просим playerWait подождать
 */
function turnAlert(io, playerTurn, playerWait, soundAlert = 'yourTurn') {
  io.to(playerTurn).emit('updateStatus', { status: 'Ваш ход!', soundAlert: soundAlert })
  io.to(playerWait).emit('updateStatus', { status: 'Ваш оппонент делает ход' })
}
