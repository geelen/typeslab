import React from 'react'
import './controls.scss!post-css'

export default class Controls extends React.Component {
  componentWillMount() {
    this.messageActions = this.context.flux.getActions('messages')
    this.setValue("Something over\ntwo lines")
    setTimeout(_ => this.setValue("Something over\nthree\nwhole lines"), 2000)
    setTimeout(_ => this.setValue("Something over\n!three lines\nthis time with italics"), 4000)
  }
  handleChange(event) {
    this.setValue(event.target.value)
  }
  setValue(value) {
    this.messageActions.changeMessage(value)
    this.setState({value: value})
  }

  render() {
    return <div className="Controls">
      <h1>Type here:</h1>
      <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

Controls.contextTypes = {
  flux: React.PropTypes.object
}


