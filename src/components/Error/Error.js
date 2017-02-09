import React from 'react'
import Snackbar from 'material-ui/Snackbar'

import './Error.scss'

export const Error = (props) => (
  <Snackbar open={props.errors.length > 0}
            message={props.errors[0] ? props.errors[0].message : ''}
            autoHideDuration={5000}
            action='CLOSE'
            onRequestClose={() => props.removeByMessage(props.errors[0].message)}
            onActionTouchTap={() => props.removeByMessage(props.errors[0].message)}
  />
)

export default Error
