import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'

class Line extends React.Component {
  componentDidMount() {
  }

  render() {
    return <Text style={this.props.line.style}>{this.props.line.line}</Text>
  }
}

export default class Output extends React.Component {
  constructor() {
    super()
    this.font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 900})
    this.altFont = FontFace('Georgia, serif', null, {style: 'italic', weight: 100})
    this.state = {}
    this.spacing = 20
  }

  componentDidMount() {
    let ctx = this.refs.surface.getDOMNode().getContext('2d')
    this.setState({ctx})
  }

  render() {
    let lines = this.layoutLines(this.props.lines)
    return <div className='Output'>
      <Surface ref="surface" width={this.props.width + this.spacing * 2} height={lines.totalHeight + this.spacing} top={0} left={0}>
        {lines.sizedLines.map((line) => {
          return <Line line={line} ctx={this.state.ctx}/>
        })}
      </Surface>
    </div>
  }

  layoutLines(lines) {
    let ctx = this.state.ctx
    if (!ctx) return {totalHeight: 0, sizedLines: []}

    let totalHeight = this.spacing,
      sizedLines = lines.map(line => {
        let text = line, font, lineHeightFactor
        if (text.match(/^!/)) {
          text = text.replace(/^!/,'')
          font = this.altFont
          lineHeightFactor = 1.25
        } else {
          text = text.toUpperCase()
          font = this.font
          lineHeightFactor = 1.05
        }
        let measurements = measureText(text, 9999, font, 12, 15),
          factor = this.props.width / measurements.width,
          fontSize = Math.min(300, 12 * factor),
          style = {fontSize, height: fontSize, lineHeight: fontSize, top: totalHeight, width: 500, fontFace: font, left: this.spacing, textAlign: 'center'}
        totalHeight += fontSize * lineHeightFactor
        return {line:text, style}
      })
    return {totalHeight, sizedLines}
  }
}
