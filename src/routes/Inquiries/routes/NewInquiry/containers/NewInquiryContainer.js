import { connect } from 'react-redux'
import NewInquiry from '../components/NewInquiry'
import { isEmpty } from 'lodash'
import { getService, getPromoCode } from '../modules/newInquiry'
import { denormalize, serviceSchema } from 'store/entities'

const mapStateToProps = (state, ownProps) => ({
  serviceSlug: ownProps.location.query.service,
  service: denormalize(
    state.get('newInquiry').get('service'),
    serviceSchema,
    state.get('entities')
  ),
  promoCode: state.get('newInquiry').get('promoCode')
})

const mapDispatchToProps = {
  getService: getService,
  validatePromoCode: getPromoCode
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInquiry)
