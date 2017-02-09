export const PREFIX = 'drawer/'
export const TOGGLE = `${PREFIX}TOGGLE_DRAWER`

export const toggle = () => (dispatch, getState) => dispatch({ type: TOGGLE })

const DRAWER_ACTION_HANDLERS = {
  [TOGGLE]: (state, action) => ({ ...state, open: !state.open }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { open: false }
export default function drawerReducer (state = initialState, action) {
  const handler = DRAWER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
