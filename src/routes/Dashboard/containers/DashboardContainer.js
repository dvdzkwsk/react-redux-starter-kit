import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { isEmpty } from 'lodash'
import { getInquiries } from '../modules/dashboard'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  activeInquiries: denormalize(
    state.get('dashboard').get('activeInquiries'),
    [inquirySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  getInquiries
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
