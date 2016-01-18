import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import { actions as localeActions } from '../../redux/modules/locale'
import { defineMessages, FormattedMessage } from 'react-intl'
import LanguageSelector from 'components/LanguageSelector'

const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    description: 'Welcome to the homepage',
    defaultMessage: 'Welcome to the React Redux Starter Kit'
  },
  sampleCounter: {
    id: 'home.sampleCounter',
    description: 'Sample Counter text',
    defaultMessage: 'Sample Counter: '
  },
  linkNotFoundView: {
    id: 'home.linkNotFoundView',
    description: 'Text link for not found view',
    defaultMessage: 'Go to 404 Page'
  },
  spanish: {
    id: 'home.spanish',
    description: 'Select language',
    defaultMessage: 'Spanish'
  },
  english: {
    id: 'home.english',
    description: 'Select language',
    defaultMessage: 'English'
  },
  french: {
    id: 'home.french',
    description: 'Select language',
    defaultMessage: 'French'
  }
})

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter,
  locale: state.locale
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    locale: React.PropTypes.string.isRequired,
    localeChange: React.PropTypes.func.isRequired
  };
/*
  No need for handleChange????
  handleChange (e) {
    this.props.localeChange(e.target.value)
  }
*/
  render () {
    const {localeChange} = this.props
    return (
      <div className='container text-center'>
      <LanguageSelector onChange={localeChange}>prueba Idioma Selector</LanguageSelector>

        <h1><FormattedMessage {...messages.welcome} /></h1>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <img className={classes.duck}
                 src={DuckImage}
                 alt='This is a duck, because Redux.' />
          </div>
        </div>
        <h1><FormattedMessage {...messages.welcome} /></h1>
        <h2>
          <FormattedMessage {...messages.sampleCounter} />
          <span className={classes['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/404'><FormattedMessage {...messages.linkNotFoundView} /></Link>
      </div>
    )
  }
}
export default connect(mapStateToProps, Object.assign({}, counterActions, localeActions))(HomeView)
