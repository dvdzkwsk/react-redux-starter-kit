// ------------------------------------
// Constants
// ------------------------------------
export const BIKEMAP_HANDLE_INPUT_CHANGE = 'BIKEMAP_HANDLE_INPUT_CHANGE'
export const BIKEMAP_GET_BIKE_ROUTES = 'BIKEMAP_GET_BIKE_ROUTES'


// ------------------------------------
// Actions
// ------------------------------------
export function handleInputChange (stateVal, value) {
  return {
    type    : BIKEMAP_HANDLE_INPUT_CHANGE,
    payload : {stateProp: stateVal, value: value}
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getBikeRoutes = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : BIKEMAP_GET_BIKE_ROUTES,
          payload : ''
        })
        resolve()
      }, 200)
    })
  }
}
// export const getBikeRoutes = () => {
//   return {
//           type    : BIKEMAP_GET_BIKE_ROUTES,
//           payload : ''
//         }
// }

export const actions = {
  handleInputChange,
  getBikeRoutes
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BIKEMAP_HANDLE_INPUT_CHANGE] : (state, action) => {
    const { stateProp, value } = action.payload;
    if(stateProp === 'start'){
      return state = {
      ...state,
      start: value
      }
    } else {
      return state = {
        ...state, 
        end: value
      }
    }
    
  },

  [BIKEMAP_GET_BIKE_ROUTES] : (state, action) => {
    state.bikeRoutes = action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  start: '',
  end: '',
  bikeRoutes: []
}
export default function bikeMapReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
