import browserHistory from 'react-router/lib/browserHistory'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export const locationChange = (location = '/') => ({
  type: LOCATION_CHANGE,
  payload: location
})

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => (nextLocation) => dispatch(locationChange(nextLocation))

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = browserHistory.getCurrentLocation()
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
