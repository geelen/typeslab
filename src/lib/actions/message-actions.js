import { Actions } from 'flummox'

export default class MessageActions extends Actions {
  changeMessage(content) {
    return content; // automatically dispatched
  }
  imageRendered(dataUrl) {
    return dataUrl;
  }
}
