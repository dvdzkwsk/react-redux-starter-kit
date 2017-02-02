import locationReducer from './location'
import { reducer as formReducer } from 'redux-form'

export default {
  location: locationReducer,
  form: formReducer
}
