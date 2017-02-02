import { connect } from 'react-redux'
import { register } from '../modules/register'

import Register from '../components/Register'

const mapActionCreators: {handleSubmit: Function} = {
  handleSubmit: register
}

const mapStateToProps = (state): { submitting: boolean } => ({
  submitting: state.register.submitting
})

export default connect(mapStateToProps, mapActionCreators)(Register)
