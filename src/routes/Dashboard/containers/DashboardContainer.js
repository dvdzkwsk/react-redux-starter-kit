import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { isEmpty } from 'lodash'
import { getActiveInquiries } from '../modules/dashboard'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  activeInquiries: denormalize(
    state.get('dashboard').get('activeInquiries'),
    [inquirySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  onComponentDidMount: getActiveInquiries
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
