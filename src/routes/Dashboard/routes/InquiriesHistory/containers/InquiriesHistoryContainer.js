import { connect } from 'react-redux'
import InquiriesHistory from '../components/InquiriesHistory'
import { isEmpty } from 'lodash'
import { getInquiries } from '../../../modules/dashboard'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  inactiveInquiries: denormalize(
    state.get('inquiriesHistory').get('inactiveInquiries'),
    [inquirySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  getInquiries: getInquiries
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiriesHistory)
