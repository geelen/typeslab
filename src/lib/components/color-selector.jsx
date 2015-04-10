import React from 'react'
import './color-selector.scss!post-css'

export default class ColorSelector extends React.Component {
  constructor() {
    this.state = {
      options: [{
        name: "Default",
        foreground: 'black',
        background: 'white'
      }, {
        name: "Inverted",
        foreground: 'white',
        background: 'black'
      }, {
        name: "Sienna",
        foreground: 'black',
        background: 'rgb(242,70,17)'
      }, {
        name: "Albatross",
        foreground: 'rgb(202,58,53)',
        background: 'rgb(208,210,207)'
      }]
    }
  }

  componentWillMount() {
    this.colorsActions = this.context.flux.getActions('colors')
    this.colorsActions.chooseColor(this.state.options[0])
  }

  chooseColor(color) {
    this.colorsActions.chooseColor(color)
  }

  render() {
    return <ul className="ColorSelector">{
      this.state.options.map(o => <li style={this.getStyle(o)} onClick={this.chooseColor.bind(this,o)}>{o.name}</li>)
    }</ul>
  }

  getStyle(option) {
    return {
      backgroundColor: option.background,
      color: option.foreground
    }
  }
}

ColorSelector.contextTypes = {
  flux: React.PropTypes.object
}
