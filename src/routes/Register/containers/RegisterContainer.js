import { connect } from 'react-redux'
import { register } from '../modules/register'

import Register from '../components/Register'

const mapActionCreators = {
  handleSubmit: register
}

const mapStateToProps = (state) => ({
  submitting: state.register.submitting
})

export default connect(mapStateToProps, mapActionCreators)(Register)
