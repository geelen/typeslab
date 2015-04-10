import React from 'react'
import MessageEntry from './message-entry.jsx!'
import FluxComponent from 'flummox/component'
import FontSelector from './font-selector.jsx!'
import ColorSelector from './color-selector.jsx!'
import './controls.scss!post-css'

export default class Controls extends React.Component {
  render() {
    return <div className="Controls">
      <h2>Enter your message:</h2>
      <MessageEntry />
      <h2>Pick your type pairing:</h2>
      <FluxComponent connectToStores='fonts'>
        <FontSelector />
      </FluxComponent>
      <h2>Choose a colour scheme:</h2>
      <ColorSelector />
    </div>
  }
}

Controls.contextTypes = {
  flux: React.PropTypes.object
}
