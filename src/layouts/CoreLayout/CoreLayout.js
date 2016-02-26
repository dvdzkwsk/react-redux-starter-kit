import React, { PropTypes } from 'react';
import '../../styles/core.scss';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children, location }) {
  return (
    <div className='page-container'>
      <div className='view-container'>

        <Navigation activePath={location.pathname} />

        {children}

        <Footer />

      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};

export default CoreLayout;
