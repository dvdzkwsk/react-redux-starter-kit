import { connect } from 'react-redux'
import { postForm } from '../modules/register'

import Register from '../components/Register'

const mapActionCreators: {handleSubmit: Function} = {
  handleSubmit: postForm
}

const mapStateToProps = (state): { submitting: boolean } => ({
  submitting: state.register.submitting
})

export default connect(mapStateToProps, mapActionCreators)(Register)
