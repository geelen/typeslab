import { Store } from 'flummox'

export default class MessageStore extends Store {
  constructor(flux) {
    super()

    const messageActions = flux.getActions('messages')
    this.register(messageActions.changeMessage, this.handleChangedMessage)
    this.state = {
      message: ""
    }
  }

  handleChangedMessage(content) {
    this.setState({
      message: content
    })
  }
}
