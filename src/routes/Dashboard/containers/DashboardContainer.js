import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { isEmpty } from 'lodash'
import { getActiveInquiries } from '../modules/dashboard'

const mapStateToProps = (state) => ({
  activeInquiries: state.dashboard.activeInquiries
})

const mapDispatchToProps = {
  onComponentDidMount: getActiveInquiries
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
