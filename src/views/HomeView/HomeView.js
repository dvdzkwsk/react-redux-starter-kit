import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

type Props = {

};

require('./HomeView.scss')

export class HomeView extends React.Component {
  props: Props;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='home'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, { params }) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {

  }

  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
