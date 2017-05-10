/**
 * Настройки порта и хоста
 */
const project = require('../config/project.config')
const HOST = project.server_host
const PORT = project.server_port

const Game = require('./game')

let uniqueId = 0 // Глобальный уникальный id
const games = [] // Массив содержит все игровые сессии

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
     * Пользователь отключился
     */
    socket.on('disconnect', () => {
      console.log(`пользователь ${socket.id} отсоединился`)

      const gameStatus = 'diconnected'
      const game = games.find(g => g.player1.id === socket.id || g.player2.id === socket.id)

      // уведомляем второго пользователя, что его оппонент отключился
      if (game) {
        game.status = gameStatus
        io.to(game.id).emit('gameOver', { gameResult: 'disconnect', status: 'Игра окончена' })
      }
    })

    // =====================================================
    //
    //     Events связанные с процессом игры
    //
    // =====================================================

    /**
     * Делает ход
     */
    socket.on('makeMove', (data) => {
      const game = games.find(g => g.id === data.gameId)

      if (game) {
        makeMove(io, game, data.squareIndex, socket.id)
      } else {
        io.to(socket.id).emit('error', { error: 'Не удалось сделать ход' })
      }
    })


    // =====================================================
    //
    //     Events связанные с чатом
    //
    // =====================================================

    /**
     * Добавляет сообщение в чат
     */
    socket.on('sendMessage', (data, status) => {
      const game = games.find(g => g.id === data.gameId)

      // Если оппонент, все еще находится в игре
      if (game && game.status !== 'diconnected') {
        const recipient = (socket.id === game.player1.id) ? game.player2.id : game.player1.id

        io.to(recipient).emit('newMessage', { text: data.text })
        status('ok')
      } else {
        io.to(socket.id).emit('error', { error: 'Не удалось доставить сообщение' })
        status('fail')
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
 * Игра окончена
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
