import locationReducer from './location'
import errorReducer from './error'
import authReducer from './auth'
import userReducer from './user'
import drawerReducer from './drawer'
import { reducer as formReducer } from 'redux-form'

export default {
  location: locationReducer,
  errors: errorReducer,
  auth: authReducer,
  user: userReducer,
  drawer: drawerReducer,
  form: formReducer
}
