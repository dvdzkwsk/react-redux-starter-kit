/**
 * User model events
 */

import { EventEmitter } from 'events'
import User from './user.model'

const UserEvents = new EventEmitter()

// Set max event listeners (0 == unlimited)
UserEvents.setMaxListeners(0)

// Model events
const events = {
  'save': 'save',
  'remove': 'remove'
}

// Register the event emitter to the model events
for (let e in events) {
  let event = events[e]
  User.schema.post(e, emitEvent(event))
}

function emitEvent (event) {
  return function (doc) {
    UserEvents.emit(event + ':' + doc._id, doc)
    UserEvents.emit(event, doc)
  }
}

export default UserEvents
