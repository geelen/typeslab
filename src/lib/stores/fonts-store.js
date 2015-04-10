import { Store } from 'flummox'

export default class FontsStore extends Store {
  constructor(flux) {
    super()

    const fontsActions = flux.getActions('fonts')
    this.register(fontsActions.fontLoaded, this.handleFontLoaded)
    this.register(fontsActions.chooseFont, this.handleChosenFont)
    this.state = {
      loadedFonts: []
    }
  }

  handleFontLoaded(font) {
    this.setState({
      loadedFonts: this.state.loadedFonts.concat([font]),
      chosenFont: this.state.chosenFont || font
    })
  }

  handleChosenFont(font) {
    this.setState({
      chosenFont: font
    })
  }
}
