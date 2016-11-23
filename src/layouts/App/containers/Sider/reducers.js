import { FETCH_SUCCESS } from './constants'

export const SiderData = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}
