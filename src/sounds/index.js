import { soundManager } from './soundmanager2.js'

soundManager.debugMode = true
soundManager.debugFlash = true
soundManager.onerror = () => {
  // SM2 could not start, no sound support, something broke etc. Handle gracefully.
  alert('error while loading sound player')
}
soundManager.onload = () => {
  soundManager.createSound({ id: 'yourTurn', url: 'sounds/yourTurn.mp3' })
  soundManager.createSound({ id: 'gameComplete', url: 'sounds/gameComplete.mp3' })
}

export default soundManager
