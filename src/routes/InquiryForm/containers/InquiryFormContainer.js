import { connect } from 'react-redux'
import InquiryForm from '../components/InquiryForm'
import { isEmpty } from 'lodash'
import { getService, getPromoCode } from '../modules/inquiryForm'

const mapStateToProps = (state) => ({
  callService: state.get('inquiryForm').get('callService'),
  promoCode: state.get('inquiryForm').get('promoCode')
})

const mapDispatchToProps = {
  onComponentDidMount: getService,
  validatePromoCode: getPromoCode
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryForm)
