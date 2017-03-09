import { connect } from 'react-redux'
import InquiryDetails from '../components/InquiryDetails'
import { getInquiry } from '../modules/inquiry'

const mapStateToProps = (state) => ({
  inquiry: state.get('resources').get('inquiries').get(state.get('inquiry').get('inquiry'))
})

const mapDispatchToProps = {
  getInquiry: getInquiry
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryDetails)
