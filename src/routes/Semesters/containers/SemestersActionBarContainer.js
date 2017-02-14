import { connect } from 'react-redux'
import { semesterClick, modeButtonClick, searchButtonClick, setSelectedIndex } from '../modules/semestersMainView'

import ActionBar from '../components/SemestersActionBar'

const mapDispatchToProps = {
  semesterClick,
  modeButtonClick,
  searchButtonClick,
  setSelectedIndex
}

const mapStateToProps = (state) => ({
  selectedIndex: state.semestersView.main.selectedIndex,
  mode: state.semestersView.main.mode,
  showSearchBar: state.semestersView.main.showSearchBar
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)
