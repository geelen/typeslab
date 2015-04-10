import { Store } from 'flummox'

export default class ColorsStore extends Store {
  constructor(flux) {
    super()

    const colorsActions = flux.getActions('colors')
    this.register(colorsActions.chooseColor, this.handleChosenColor)
  }

  handleChosenColor(color) {
    this.setState({
      chosenColor: color
    })
  }
}
