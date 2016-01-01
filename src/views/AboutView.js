import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  welcome: {
    id: 'about.welcome',
    description: 'title h1',
    defaultMessage: 'This is the about view!'
  },
  linkHomeView: {
    id: 'about.linkAboutView',
    description: 'Text link for home view',
    defaultMessage: 'Back To Home View'
  }
})

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1><FormattedMessage {...messages.welcome} /></h1>
        <hr />
        <Link to='/'><FormattedMessage {...messages.linkHomeView} /></Link>
      </div>
    )
  }
}

export default AboutView
