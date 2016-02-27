import React from 'react';
import { Route, IndexRoute } from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView/HomeView';
import ThingView from 'views/ThingView/ThingView';
import SettingsView from 'views/SettingsView/SettingsView';
import SignupView from 'views/SignupView/SignupView';
import LoginView from 'views/LoginView/LoginView';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/things' component={ThingView} />
    <Route path='/settings' component={SettingsView} />
    <Route path='/signup' component={SignupView} />
    <Route path='/login' component={LoginView} />
  </Route>
);
