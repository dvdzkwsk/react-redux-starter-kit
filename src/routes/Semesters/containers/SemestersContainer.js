import { connect } from 'react-redux'
import { semesterClick, modeButtonClick, searchButtonClick } from '../modules/semesters'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {
  semesterClick,
  modeButtonClick,
  searchButtonClick
}

const mapStateToProps = (state) => ({
  filteredSemesters: state.semesters.filteredSemesters,
  mode: state.semesters.mode,
  showSearchBar: state.semesters.showSearchBar
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
