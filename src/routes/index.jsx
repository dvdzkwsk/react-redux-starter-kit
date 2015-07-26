import { DefaultRoute, Route } from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/core';
import HomeView    from 'views/home';

export default (
  <Route handler={CoreLayout}>
    <DefaultRoute handler={HomeView} />
  </Route>
);
