import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Layer from 'react-canvas/lib/Layer'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'

let getFontFace = (font) => {
  let options = {weight: font.weight}
  if (font.italic) options.style = 'italic'
  return FontFace(font.name, null, options)
}

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
    this.state = {}
    this.spacing = 32
  }

  componentDidMount() {
    this.canvas = this.refs.surface.getDOMNode()
  }

  render() {
    let lines = this.layoutLines(this.props.lines),
      text = 'typeslab.com'
    return <div className='Output'>
      <Surface ref="surface" width={this.props.width + this.spacing * 2} height={lines.totalHeight + this.spacing} top={0} left={0}>
        <Layer style={this.getBorderStyle(lines.totalHeight)}/>
        {lines.sizedLines.map((line) => {
          return <Line line={line}/>
        })}
        <Text style={this.getByLineStyle(text, lines.totalHeight)}>{text}</Text>
      </Surface>
    </div>
  }

  layoutLines(lines) {
    let totalHeight = this.spacing,
      sizedLines = []
    if (this.props.chosenFont) {
      sizedLines = lines.map(line => {
        let text = line, font, lineHeightFactor, prePaddingFactor
        if (!text.match(/^!/)) {
          font = this.props.chosenFont.main
          lineHeightFactor = 1.05
          prePaddingFactor = 0
        } else {
          text = text.replace(/^!/, '')
          font = this.props.chosenFont.alt
          lineHeightFactor = 1.5
          prePaddingFactor = 0.1
        }
        text = font.caps ? text.toUpperCase() : text
        let fontFace = getFontFace(font),
          measurements = measureText(text, 9999, fontFace, 12, 15),
          factor = this.props.width / measurements.width,
          fontSize = Math.min(300, 12 * factor),
          lineHeight = fontSize * lineHeightFactor,
          style = {
            fontSize,
            height: fontSize,
            lineHeight: fontSize,
            top: totalHeight + lineHeight * prePaddingFactor,
            width: 500 + 2 * this.spacing,
            fontFace,
            left: 0,
            textAlign: 'center'
          }
        totalHeight += lineHeight
        return {line: text, style}
      })
    }
    return {totalHeight, sizedLines}
  }

  getBorderStyle(height) {
    return {
      borderColor: '#444',
      top: this.spacing / 2,
      width: this.props.width + this.spacing,
      left: this.spacing / 2,
      height: height
    }
  }

  getByLineStyle(text, height) {
    let font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 400}),
      size = 7,
      width = measureText(text, 9999, font, size, 15).width
    return {
      fontFace: font,
      fontSize: size,
      backgroundColor: 'white',
      textAlign: 'center',
      width: width + 6,
      left: this.props.width / 2 + this.spacing / 4,
      top: height + 12,
      height: 16
    }
  }
}

Output.contextTypes = {
  flux: React.PropTypes.object
}
