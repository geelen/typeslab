import { Actions } from 'flummox'
import Fonts from '../fonts'
import FontDetect from 'FontDetect/lib/fontdetect'
import F from 'fkit'

export default class FontsActions extends Actions {
  loadAllFonts() {
    this.loadLocalFonts()
    this.loadGoogleFonts()
  }

  loadLocalFonts() {
    var isLocal = font => font.main.local && font.alt.local;
    F.filter(isLocal, Fonts).forEach(font => {
      let isLoaded = f => FontDetect.isFontLoaded(f)
      font.main.font = F.find(isLoaded, font.main.local) || 'sans-serif'
      font.alt.font = F.find(isLoaded, font.alt.local) || 'serif'
      this.fontLoaded(font)
    })
  }

  loadGoogleFonts() {

  }

  fontLoaded(font) {
    return font
  }
}
