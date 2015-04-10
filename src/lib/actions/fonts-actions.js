import { Actions } from 'flummox'
import Fonts from '../fonts'
import FontDetect from 'FontDetect/lib/fontdetect'
import F from 'fkit'
import 'webfontloader'

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
    console.log(WebFont)
    WebFont.load({
      classes: false,
      fontactive: (familyName, fvd) => console.log(familyName, fvd),
      google: {
        families: ['Droid Sans']
      }
    })
  }

  fontLoaded(font) {
    return font
  }
}
