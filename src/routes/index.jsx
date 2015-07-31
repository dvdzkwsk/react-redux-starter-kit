import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/core';
import HomeView    from 'views/home';
import AboutView   from 'views/about';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={HomeView} />
    <Route name='about' path='/about' component={AboutView} />
  </Route>
);
