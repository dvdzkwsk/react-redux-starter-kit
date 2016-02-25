/**
 * Thing model events
 */

import { EventEmitter } from 'events'
import Thing from './thing.model'

const ThingEvents = new EventEmitter()

// Set max event listeners (0 == unlimited)
ThingEvents.setMaxListeners(0)

// Model events
const events = {
  'save': 'save',
  'remove': 'remove'
}

// Register the event emitter to the model events
for (let e in events) {
  let event = events[e]
  Thing.schema.post(e, emitEvent(event))
}

function emitEvent (event) {
  return function (doc) {
    ThingEvents.emit(event + ':' + doc._id, doc)
    ThingEvents.emit(event, doc)
  }
}

export default ThingEvents
