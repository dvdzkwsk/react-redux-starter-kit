import { connect } from 'react-redux'
import { updateSemester } from '../modules/semester'

import Semester from '../components/Semester'

const mapDispatchToProps = {
  handleSubmit: updateSemester
}

const mapStateToProps = (state, ownProps) => ({
  currentSemester: ownProps.params.semesterId ? state.semesters.currentSemester : {}
})

export default connect(mapStateToProps, mapDispatchToProps)(Semester)
