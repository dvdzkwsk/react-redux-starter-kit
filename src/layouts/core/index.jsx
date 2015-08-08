import React  from 'react';
import store from 'stores';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import './core-layout.scss';

export default class CoreLayout extends React.Component {
  constructor () {
    super();
  }

  renderDevTools () {
    return (
      <DebugPanel top left bottom key='debugPanel'>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  render () {
    return (
      <div className='page-container'>
        {__DEBUG__  && this.renderDevTools()}
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
