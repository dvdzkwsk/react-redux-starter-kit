import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import { actions as localeActions } from '../redux/modules/locale'
import styles from './HomeView.scss'
import { defineMessages, FormattedMessage } from 'react-intl'

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
  linkAboutView: {
    id: 'home.linkAboutView',
    description: 'Text link for about view',
    defaultMessage: 'Go to About View'
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
  }

  handleChange (e) {
    this.props.localeChange(e.target.value)
  }

  render () {
    return (
      <div className='container text-center'>
        <select defaultValue={this.props.locale} onChange={(e) => this.handleChange(e)}>
          <option value='es'>Spanish</option>
          <option value='fr'>French</option>
          <option value='en'>English</option>
        </select>
        <h1><FormattedMessage {...messages.welcome} />"</h1>
        <h2>
          <FormattedMessage {...messages.sampleCounter} />
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/about'><FormattedMessage {...messages.linkAboutView} /></Link>
      </div>
    )
  }
}
export default connect(mapStateToProps, Object.assign({}, counterActions, localeActions))(HomeView)
