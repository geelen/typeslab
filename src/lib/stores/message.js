import { Actions, Store, Flummox } from 'flummox'

class MessageActions extends Actions {
  changeMessage(content) {
    return content; // automatically dispatched
  }
}

class MessageStore extends Store {
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

class Flux extends Flummox {
  constructor() {
    super()

    this.createActions('messages', MessageActions)
    this.createStore('messages', MessageStore, this)
  }
}

export default Flux
