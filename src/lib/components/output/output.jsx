import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Layer from 'react-canvas/lib/Layer'
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
    this.spacing = 32
  }

  componentDidMount() {
    this.canvas = this.refs.surface.getDOMNode()
  }

  //componentDidUpdate() {
  //  requestAnimationFrame(_ => {
  //    this.context.flux.getActions('messages').imageRendered(this.canvas.toDataURL())
  //  })
  //}

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
      sizedLines = lines.map(line => {
        let text = line, font, lineHeightFactor
        if (text.match(/^!/)) {
          text = text.replace(/^!/, '')
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
          style = {
            fontSize,
            height: fontSize,
            lineHeight: fontSize,
            top: totalHeight,
            width: 500 + 2 * this.spacing,
            fontFace: font,
            left: 0,
            textAlign: 'center'}
        totalHeight += fontSize * lineHeightFactor
        return {line: text, style}
      })
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
      left: (this.props.width + this.spacing) / 2,
      top: height + 12,
      height: 16
    }
  }
}

Output.contextTypes = {
  flux: React.PropTypes.object
}
