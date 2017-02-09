import { connect } from 'react-redux'
import { semesterClick, modeButtonClick, searchButtonClick, loadSemesters } from '../modules/semesters'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {
  semesterClick,
  modeButtonClick,
  searchButtonClick,
  loadSemesters
}

const mapStateToProps = (state) => ({
  filteredSemesters: state.semesters.filteredSemesters,
  mode: state.semesters.mode,
  showSearchBar: state.semesters.showSearchBar,
  fetched: state.semesters.fetched
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
