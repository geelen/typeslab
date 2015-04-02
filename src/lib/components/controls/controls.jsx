import React from 'react'
import './controls.scss!post-css'


class Controls extends React.Component {
  handleChange(event) {
    this.context.flux.getActions('messages')
      .changeMessage(event.target.value)
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

export default Controls
