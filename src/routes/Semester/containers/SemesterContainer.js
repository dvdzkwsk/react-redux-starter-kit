import { connect } from 'react-redux'
import { updateSemester } from '../modules/semester'

import Semester from '../components/Semester'

const mapDispatchToProps = {
  updateSemester
}

const mapStateToProps = (state, ownProps) => {
  console.log('--------------', ownProps);
  return ({
    mode: ownProps.params.mode
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Semester)
