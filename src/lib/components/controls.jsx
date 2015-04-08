import React from 'react'
import MessageEntry from './message-entry.jsx!'
import './controls.scss!post-css'

export default class Controls extends React.Component {
  render() {
    return <div className="Controls">
      <MessageEntry />
    </div>
  }
}

Controls.contextTypes = {
  flux: React.PropTypes.object
}
