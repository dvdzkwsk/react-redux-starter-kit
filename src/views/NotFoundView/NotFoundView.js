import React from 'react'
import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  welcome: {
    id: 'notFound.welcome',
    description: 'page message',
    defaultMessage: 'This is a demo 404 page!'
  },
  linkHomeView: {
    id: 'notFound.linkHomeView',
    description: 'Text link for home view',
    defaultMessage: 'Back To Home View'
  }
})

export class NotFoundView extends React.Component {
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

export default NotFoundView
