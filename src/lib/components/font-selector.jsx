import React from 'react'

export default class FontSelector extends React.Component {
  componentWillMount() {
    this.fontsActions = this.props.flux.getActions('fonts')
    this.fontsActions.loadAllFonts()
  }

  chooseFont(font) {
    this.fontsActions.chooseFont(font)
  }
  render() {
    return <div>{
      this.props.loadedFonts.map(f =>
        <div onClick={this.chooseFont.bind(this, f)}>
          <span style={this.getTextStyle(f.main)}>{f.main.name}</span>
          +
          <span style={this.getTextStyle(f.alt)}>{f.alt.name}</span>
          </div>
      )
    }</div>
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
