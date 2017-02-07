import { connect } from 'react-redux'
import { removeErrorByIndex } from '../store/rootReducers/error'

import Error from '../components/Error'

const mapDispatchToProps = {
  removeErrorByIndex
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(Error)
