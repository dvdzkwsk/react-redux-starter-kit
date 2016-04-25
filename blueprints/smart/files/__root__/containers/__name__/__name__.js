import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

type Props = {

}
export class <%= pascalEntityName %> extends React.Component {
  props: Props;

  render() {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)
