import React from 'react'
import './color-selector.scss!post-css'
import Colors from '../colors'

export default class ColorSelector extends React.Component {
  componentWillMount() {
    this.colorsActions = this.context.flux.getActions('colors')
    this.chooseColor(Colors[0])
  }

  chooseColor(color) {
    this.colorsActions.chooseColor(color)
  }

  render() {
    return <ul className="ColorSelector">{
      Colors.map(o => <li style={this.getStyle(o)} onClick={this.chooseColor.bind(this,o)} className={o === this.props.chosenColor ? '-selected' : ''}> {o.name} </li>)
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
