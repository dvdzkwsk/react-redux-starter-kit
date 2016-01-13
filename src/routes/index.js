import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
//
// We are also using a webpack resolver plugin to provide an easy
// shortcut for referencing components nested in directories with
// matching file names (our convention) so instead of:
//
//    import CoreLayout from 'layouts/CoreLayout/CoreLayout'
//
// we can just use:
//
//    import CoreLayout from 'layouts/CoreLayout'
//
// which will resolve to the correct file

import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import NotFoundView from 'views/NotFoundView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)
