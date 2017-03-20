import { connect } from 'react-redux'
import Inquiry from '../components/Inquiry'
import { getInquiry, cancelInquiry } from '../modules/inquiry'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state, ownProps) => ({
  inquiryId: ownProps.params.id,
  inquiry: denormalize(
    state.get('inquiry').get('inquiry'),
    inquirySchema,
    state.get('entities')
  )
})

const mapDispatchToProps = {
  getInquiry: getInquiry,
  cancelInquiry: cancelInquiry
}

export default connect(mapStateToProps, mapDispatchToProps)(Inquiry)
