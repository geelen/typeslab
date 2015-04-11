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
    let isLocal = font => font.main.local && font.alt.local
    F.filter(isLocal, Fonts).forEach(font => {
      let isLoaded = f => FontDetect.isFontLoaded(f)
      font.main.name = F.find(isLoaded, font.main.local) || 'sans-serif'
      font.alt.name = F.find(isLoaded, font.alt.local) || 'serif'
      this.fontLoaded(font)
    })
  }

  loadGoogleFonts() {
    let isGoogle = font => font.main.google && font.alt.google,
      fonts = [],
      googleFonts = F.filter(isGoogle, Fonts),
      toGoogleName = f => `${f.google}:${f.weight}${f.italic ? 'italic' : ''}`
    googleFonts.forEach(font => fonts.push(toGoogleName(font.main), toGoogleName(font.alt)))
    WebFont.load({
      classes: false,
      google: {
        families: F.nub(fonts)
      },
      active: () => {
        googleFonts.forEach(font => {
          font.main.name = font.main.google
          font.alt.name = font.alt.google
          this.fontLoaded(font)
        })
      }
    })
  }

  fontLoaded(font) {
    return font
  }

  chooseFont(font) {
    return font
  }
}
