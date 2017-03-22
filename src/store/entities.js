import Immutable from 'immutable';
import { normalize, denormalize } from 'normalizr'

export { normalize, denormalize } from 'normalizr'
export { inquirySchema, serviceSchema, categorySchema } from './schemas'

export const UPDATE_ENTITIES = 'UPDATE_ENTITIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateEntities (entities) {
  return {
    type    : UPDATE_ENTITIES,
    payload : entities
  }
}

export const actions = {
  updateEntities
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_ENTITIES]: (state, { payload }) => {
    return state.mergeDeep(payload)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  inquiries: {},
  services: {}
})

export default function entitiesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
