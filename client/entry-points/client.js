import React          from 'react';
import ReactDOM       from 'react-dom';
import Root           from 'containers/root';
import configureStore from 'stores';
import { history }    from 'react-router/lib/BrowserHistory';

const target = document.getElementById('root');
const store  = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(<Root routerHistory={history} store={store}/>, target);
