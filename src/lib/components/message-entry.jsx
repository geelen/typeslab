import React from 'react'
import './message-entry.scss!post-css'

export default class MessageEntry extends React.Component {
  componentWillMount() {
    this.messageActions = this.context.flux.getActions('message')
    this.setValue("Whatever you write here\nwill be rendered as a slab-type\nposter!\nStart a line with an '!'\n!to use the alternate typeface\nnow go and write something\nprofound\nand share it with the world!")
  }
  handleChange(event) {
    this.setValue(event.target.value)
  }
  setValue(value) {
    this.messageActions.changeMessage(value)
    this.setState({value: value})
  }

  render() {
    return <div className='MessageEntry'>
      <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

MessageEntry.contextTypes = {
  flux: React.PropTypes.object
}
