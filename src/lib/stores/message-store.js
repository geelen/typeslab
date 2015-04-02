import { Store } from 'flummox'

export default class MessageStore extends Store {
  constructor(flux) {
    super()

    const messageActions = flux.getActions('messages')
    this.register(messageActions.changeMessage, this.handleChangedMessage)
    this.state = {
      message: "",
      lines: []
    }
  }

  handleChangedMessage(content) {
    this.setState({
      message: content,
      lines: content.split("\n").filter(x => x)
    })
  }
}
