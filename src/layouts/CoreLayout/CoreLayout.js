import React from 'react'
import '../../styles/core.scss'

/*
  Note: Stateless function components *will not* hot reload!
  react-transform *only* works on component classes (since
  it wraps the component's backing instance).

  We are using a babel plugin to transform pure component
  classes to function components for production builds.

  Since CoreLayout is a pure function of it's props, the
  babel compiler will output the following:

  function CoreLayout ({ children }) {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {children}
        </div>
      </div>
    )
  }

  CoreLayout.propTypes = {
    children: React.PropTypes.element
  }
*/

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };
  render () {
    const { children } = this.props
    return (
      <div className='page-container'>
        <div className='view-container'>
          {children}
        </div>
      </div>
    )
  }
}
