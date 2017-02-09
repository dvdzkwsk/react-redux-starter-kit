import { connect } from 'react-redux'
import { register } from '../modules/register'

import Register from '../components/Register'

const mapActionCreators = {
  register
}

export default connect(null, mapActionCreators)(Register)
