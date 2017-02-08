import { connect } from 'react-redux'
import { updateSemester } from '../modules/semester'

import Semester from '../components/Semester'

const mapDispatchToProps = {
  handleSubmit: updateSemester
}

const mapStateToProps = (state, ownProps) => ({
  mode: ownProps.params.mode
})

export default connect(mapStateToProps, mapDispatchToProps)(Semester)
