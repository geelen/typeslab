import { Flummox } from 'flummox'
import MessageActions from './actions/message-actions'
import MessageStore from './stores/message-store'
import FontsActions from './actions/fonts-actions'
import FontsStore from './stores/fonts-store'

export default class Flux extends Flummox {
  constructor() {
    super()

    this.createActions('message', MessageActions)
    this.createStore('message', MessageStore, this)
    this.createActions('fonts', FontsActions)
    this.createStore('fonts', FontsStore, this)
  }
}
