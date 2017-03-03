import { connect } from 'react-redux'
import { login } from '../modules/login'
import Login from '../components/Login'

const mapDispatchToProps = {
  submitForm: login
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
