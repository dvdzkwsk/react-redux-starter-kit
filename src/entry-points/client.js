import React       from 'react';
import ReactDOM    from 'react-dom';
import Root        from 'containers/root';
import { history } from 'react-router/lib/BrowserHistory';

ReactDOM.render(<Root history={history} />, document.getElementById('root'));
