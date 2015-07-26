import Router from 'react-router';
import React  from 'react';
import routes from '../routes';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.body);
});
