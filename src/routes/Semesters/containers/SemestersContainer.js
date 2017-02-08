import { connect } from 'react-redux'
import { semesterClick, modeButtonClick } from '../modules/semesters'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {
  semesterClick,
  modeButtonClick
}

const mapStateToProps = (state) => ({
  filteredSemesters: state.semesters.filteredSemesters,
  mode: state.semesters.mode
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
