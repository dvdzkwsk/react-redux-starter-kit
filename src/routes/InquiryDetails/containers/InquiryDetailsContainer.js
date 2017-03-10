import { connect } from 'react-redux'
import InquiryDetails from '../components/InquiryDetails'
import { getInquiry } from '../modules/inquiry'
import { denormalize, inquirySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  inquiry: denormalize(
    state.get('inquiry').get('inquiry'),
    inquirySchema,
    state.get('entities')
  )
})

const mapDispatchToProps = {
  getInquiry: getInquiry
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryDetails)
