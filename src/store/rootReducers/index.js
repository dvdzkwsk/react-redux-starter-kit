import locationReducer from './location'
import authReducer from './auth'
import userReducer from './user'
import { reducer as formReducer } from 'redux-form'

export default {
  location: locationReducer,
  auth: authReducer,
  user: userReducer,
  form: formReducer
}
