import React from 'react'
import './controls.scss!post-css'

export default class FontSelector extends React.Component {
  componentWillMount() {
    this.fontsActions = this.props.flux.getActions('fonts')
    this.fontsActions.loadAllFonts()
  }
  render() {
    return <div>
      { this.props.loadedFonts.map(f => <h1>{f.main.font} + {f.alt.font}</h1>)}
    </div>
  }
}
