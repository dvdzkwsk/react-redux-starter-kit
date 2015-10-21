import { Route, IndexRoute }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
  </Route>
);
