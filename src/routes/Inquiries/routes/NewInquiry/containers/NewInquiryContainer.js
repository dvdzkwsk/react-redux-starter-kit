import { connect } from 'react-redux'
import NewInquiry from '../components/NewInquiry'
import { isEmpty } from 'lodash'
import { getService, getPromoCode, getProvince } from '../modules/newInquiry'
import { denormalize, serviceSchema } from 'store/entities'

const mapStateToProps = (state, ownProps) => ({
  serviceSlug: ownProps.location.query.service,
  service: denormalize(
    state.get('newInquiry').get('service'),
    serviceSchema,
    state.get('entities')
  ),
  promoCode: state.get('newInquiry').get('promoCode'),
  provinces: state.get('newInquiry').get('provinces')
  // isLoading: state.get('newInquiry').get('isLoading')
})

const mapDispatchToProps = {
  getService: getService,
  validatePromoCode: getPromoCode,
  getProvinces: getProvinces
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInquiry)
