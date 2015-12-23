import React from 'react'

import { Glyphicon, Input } from 'react-bootstrap'

export default class JobList extends React.Component {
  // static propTypes = {
  //   store: React.PropTypes.object.isRequired
  // }

  render () {
    const searchGlyphicon = <Glyphicon glyph='search' />
    return (
    <div>
      <h3>All Jobs</h3>
      <Input type='text' addonAfter={searchGlyphicon} />
    </div>
    )
  }
}
