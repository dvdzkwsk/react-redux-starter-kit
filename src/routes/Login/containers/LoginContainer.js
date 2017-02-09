import { connect } from 'react-redux'
import { login } from '../modules/login'

import Login from '../components/Login'

const mapActionCreators: {handleSubmit: Function} = {
  login
}

export default connect(null, mapActionCreators)(Login)
