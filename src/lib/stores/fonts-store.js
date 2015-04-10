import { Store } from 'flummox'

export default class FontsStore extends Store {
  constructor(flux) {
    super()

    const fontsActions = flux.getActions('fonts')
    this.register(fontsActions.fontLoaded, this.handleFontLoaded)
    this.state = {
      loadedFonts: [],
      chosenFont: undefined
    }
  }

  handleFontLoaded(font) {
    this.state.loadedFonts.push(font)
    if (!this.state.chosenFont) this.state.chosenFont = font
  }
}
