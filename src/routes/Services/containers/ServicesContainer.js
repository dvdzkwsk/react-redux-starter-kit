import { connect } from 'react-redux'
import { getCategories } from '../modules/services'
import { denormalize, categorySchema } from 'store/entities'

import Categories from '../components/Categories'

const mapStateToProps = (state) => ({
  categories: denormalize(
    state.get('services').get('categories'),
    [categorySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  onComponentDidMount: getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
