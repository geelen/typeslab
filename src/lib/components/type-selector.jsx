import React from 'react'
import './type-selector.scss!post-css'

export default class TypeSelector extends React.Component {
  componentWillMount() {
    this.fontsActions = this.props.flux.getActions('fonts')
    this.fontsActions.loadAllFonts()
  }

  chooseFont(font) {
    this.fontsActions.chooseFont(font)
  }

  render() {
    return <ul className="TypeSelector">{
      this.props.loadedFonts.map(f =>
          <li onClick={this.chooseFont.bind(this, f)} className={this.props.chosenFont === f ? '-selected' : ''}>
            <span style={this.getTextStyle(f.main)}>{f.main.name}</span>
            <span style={this.getTextStyle(f.alt)}>{f.alt.name}</span>
          </li>
      )
    }{ this.props.stillLoading ? "Loading..." : <div></div> }</ul>
  }

  getTextStyle(font) {
    return {
      fontFamily: font.name,
      textTransform: font.caps ? 'uppercase' : 'initial',
      fontWeight: font.weight,
      fontStyle: font.italic ? 'italic' : 'initial'
    }
  }
}
