import { connect } from 'react-redux'
// import {  } from '../modules/semesters'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  semesters: state.semesters.semesters
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
