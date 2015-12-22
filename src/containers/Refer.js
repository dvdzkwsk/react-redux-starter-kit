import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'

import { actions as referActions } from '../redux/modules/generalRefer'

const mapStateToProps = (state) => ({
  generalRefer: state.generalRefer
})
export default class Refer extends React.Component {

  static propTypes = {
    generalRefer: React.PropTypes.bool.isRequired,
    open: React.PropTypes.func.isRequired
  }

  render () {
    let popover = <Popover title='popover'>very popover. such engagement</Popover>
    let tooltip = <Tooltip>wow.</Tooltip>
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
      <Modal show={this.props.generalRefer} onHide={() => this.props.open()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <h4>Popover in a modal</h4>
          <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

          <h4>Tooltips in a modal</h4>
          <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
           in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
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

