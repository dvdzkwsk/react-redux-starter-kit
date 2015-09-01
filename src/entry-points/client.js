import React    from 'react';
import ReactDOM from 'react-dom';
import App      from 'containers/app';
import { history } from 'react-router/lib/BrowserHistory';

ReactDOM.render(<App history={history} />, document.getElementById('root'));
