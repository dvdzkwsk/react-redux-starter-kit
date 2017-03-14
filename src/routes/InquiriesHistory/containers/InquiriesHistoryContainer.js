import { connect } from 'react-redux'
import InquiriesHistory from '../components/InquiriesHistory'
import { isEmpty } from 'lodash'
import { getInactiveInquiries } from '../modules/inquiriesHistory'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  inactiveInquiries: denormalize(
    state.get('inquiriesHistory').get('inactiveInquiries'),
    [inquirySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  onComponentDidMount: getInactiveInquiries
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiriesHistory)
