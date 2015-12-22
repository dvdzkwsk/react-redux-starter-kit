import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Grid, Row, Col, PageHeader } from 'react-bootstrap'

import { actions as counterActions } from '../redux/modules/counter'
import JobList from 'containers/JobList'
import Refer from 'containers/Refer'
import styles from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageHeader>Welcome to Roleponttest Careers</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <JobList />
          </Col>
          <Col xs={4}>
            <Refer />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>
              Sample Counter:&nbsp;
              <span className={styles['counter--green']}>{this.props.counter}</span>
            </h2>
            <Button onClick={() => this.props.increment(1)}>
              Increment
            </Button>
            <Button onClick={this.props.doubleAsync}>
              Double (Async)
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <hr />
            <Link to='/about'>Go To About View</Link>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
