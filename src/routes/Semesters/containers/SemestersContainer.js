import { connect } from 'react-redux'
import { switchSemestersMode } from '../modules/semesters'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {
  switchMode: switchSemestersMode
}

const mapStateToProps = (state) => ({
  semesters: state.semesters.semesters,
  mode: state.semesters.mode
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
