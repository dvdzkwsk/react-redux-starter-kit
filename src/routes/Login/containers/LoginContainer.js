import { connect } from 'react-redux'
import { postForm } from '../modules/login'

import Login from '../components/Login'

const mapActionCreators: {handleSubmit: Function} = {
  handleSubmit: postForm
}

const mapStateToProps = (state): { submitting: boolean } => ({
  submitting: state.login.submitting
})

export default connect(mapStateToProps, mapActionCreators)(Login)
