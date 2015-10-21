import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';

export default (
  <Route path='/' component={CoreLayout}>
    <Route path='/home' component={HomeView} />
    <Route path='/test' component={HomeView} />
  </Route>
);
