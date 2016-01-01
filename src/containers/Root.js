import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { IntlProvider } from 'react-intl'
import * as messages from 'i18n/'
import { connect } from 'react-redux'

class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired,
    locale: React.PropTypes.string.isRequired
  }

  get content () {
    const intlData = {
      locale: this.props.locale,
      messages: messages[this.props.locale]
    }
    return (
      <IntlProvider {...intlData}>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
      </IntlProvider>
    )
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.content}
          {this.devTools}
        </div>
      </Provider>
    )
  }
}

function mapStateToProps (state) {
  return { locale: state.locale }
}
export default connect(mapStateToProps)(Root)

