import React from 'react';
import ReactDOM from 'react-dom';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function createDevToolsWindow (store) {
  const win = window.open(
    null,
    'redux-devtools', // give it a name so it reuses the same window
    'menubar=no,location=no,resizable=yes,scrollbars=no,status=no'
  );

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  win.document.write('<div id="react-devtools-root"></div>');

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    ReactDOM.render(
      <DebugPanel top right bottom left key="debugPanel" >
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      , win.document.getElementById('react-devtools-root'));
  }, 10);
}
