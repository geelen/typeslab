import React from 'react'
import './controls.scss!post-css'

export default
class Controls extends React.Component {
  handleChange(event) {
    this.props.flux.getActions('messages')
      .changeMessage(event.target.value)
  }

  render() {
    return <div className="Controls">
      <h1>Controls</h1>
      <textarea onChange={this.handleChange.bind(this)}/>
    </div>
  }
}
