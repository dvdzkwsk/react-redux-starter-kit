import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { mode } from '../modules/semestersMainView'

export const ActionBar = (props) => (
  <div>
    <ButtonGroup style={{ textAlign: 'center' }}>
      <Button onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }}><FontAwesome name='plus' /></Button>
      <Button onClick={() => { props.modeButtonClick(mode.edit) }} {...props.mode === mode.edit ? { bsStyle: 'primary' } : {}}><FontAwesome name='edit' /></Button>
      <Button onClick={() => { props.modeButtonClick(mode.info) }} {...props.mode === mode.info ? { bsStyle: 'primary' } : {}}><FontAwesome name='info' /></Button>
      <Button onClick={() => { props.modeButtonClick(mode.remove) }} {...props.mode === mode.remove ? { bsStyle: 'primary' } : {}}><FontAwesome name='remove' /></Button>
    </ButtonGroup>
    <Button onClick={() => props.searchButtonClick()} {...props.showSearchBar ? { bsStyle: 'primary' } : {}}><FontAwesome name='search' /></Button>
  </div>
)

export default ActionBar
