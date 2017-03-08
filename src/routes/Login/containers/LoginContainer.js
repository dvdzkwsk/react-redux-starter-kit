import { connect } from 'react-redux'
import { login } from 'store/authentication'
import Login from '../components/Login'

const mapDispatchToProps = {
  submitForm: login
}

export default connect(null, mapDispatchToProps)(Login)
