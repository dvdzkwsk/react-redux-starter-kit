import { connect } from 'react-redux'

import Characters from '../components/Characters'

const mapDispatchToProps = {}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
