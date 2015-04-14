import { Store } from 'flummox'

export default class MessageStore extends Store {
  constructor(flux) {
    super()

    const messageActions = flux.getActions('message')
    this.register(messageActions.changeMessage, this.handleChangedMessage)
    this.register(messageActions.imageRendered, this.handleNewImage)
    this.state = {
      message: "",
      lines: []
    }
  }

  handleChangedMessage(content) {
    this.setState({
      message: content,
      lines: content.split("\n").filter(x => x !== "" && x !== "!")
    })
  }

  handleNewImage(dataUrl) {
    this.setState({
      imageUrl: dataUrl
    })
  }
}
