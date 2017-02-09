import { connect } from 'react-redux'
import { removeByMessage } from '../store/rootReducers/error'

import Error from '../components/Error'

const mapDispatchToProps = {
  removeByMessage
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(Error)
