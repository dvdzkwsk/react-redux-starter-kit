import '../styles/core.scss'

/*
// Note: Stateless/function components *will not* yet hot reload!
// react-transform *only* works on component classes.
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
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

class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }
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

export default CoreLayout
