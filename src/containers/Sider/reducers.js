import { FETCH_SUCCESS } from './actions'

export default function siderReducer (state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}
