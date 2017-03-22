import React from 'react'

export class Loader extends React.Component {
  render () {
    if (this.props.isLoading) {
      return (
        <div className='ball-clip-rotate'>
          <div />
        </div>
      )
    }
    else {
      return this.props.children ? this.props.children : null
    }
  }
}

export default Loader
