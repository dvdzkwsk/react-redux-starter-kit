import React from 'react';
import App from 'containers/app';
import { history } from 'react-router/lib/BrowserHistory';

React.render(<App history={history} />, document.getElementById('mount'));
