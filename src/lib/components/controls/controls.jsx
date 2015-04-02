import React from 'react'
import './controls.scss!post-css'

export default class Controls extends React.Component {
  componentWillMount() {
    this.messageActions = this.context.flux.getActions('messages')
  }
  handleChange(event) {
    this.messageActions.changeMessage(event.target.value)
  }

  render() {
    return <div className="Controls">
      <h1>Controls</h1>
      <textarea onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

Controls.contextTypes = {
  flux: React.PropTypes.object
}


