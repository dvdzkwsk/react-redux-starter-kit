import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

import GeneralReferForm from 'components/GeneralReferForm'
import { actions as referActions } from '../redux/modules/generalRefer'

const mapStateToProps = (state) => ({
  generalRefer: state.generalRefer
})
export default class Refer extends React.Component {

  static propTypes = {
    generalRefer: React.PropTypes.object.isRequired,
    open: React.PropTypes.func.isRequired
  }

  render () {
    return (
    <div>
      <h3>Already know who to refer?</h3>
      <Button bsStyle='primary' bsSize='large' onClick={() => this.props.open()}>CLICK HERE</Button>
      <h3>No job in mind for your candidate?</h3>
      <Button>CLICK HERE TO STILL REFER THEM</Button>
      <p>
        You can refer someone to the company and recommend a department or location for them to work in.
        You will still get credited for the referral if they are placed.
      </p>
      <h3>
        <span className='glyphicon glyphicon-tower' aria-hidden='true'></span>
        Referral Leaderboard
      </h3>
      <Modal show={this.props.generalRefer.isOpen} onHide={() => this.props.open()}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Referral</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GeneralReferForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.open()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}
export default connect(mapStateToProps, referActions)(Refer)

