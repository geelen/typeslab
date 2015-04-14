import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Layer from 'react-canvas/lib/Layer'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import Share from './share.jsx!'
import measureText from 'react-canvas/lib/measureText'
import Typesetter from '../models/typesetter'
import './output.scss!post-css'

class Line extends React.Component {
  render() {
    return <Text style={this.props.line.style}>{this.props.line.line}</Text>
  }
}

export default class Output extends React.Component {
  constructor() {
    super()
    this.spacing = 32
    this.state = {lines: [], height: this.spacing}
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.surface.getDOMNode()
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.chosenFont) {
      if (!this.typesetter || newProps.chosenFont != this.props.chosenFont) {
        this.typesetter = new Typesetter(newProps.chosenFont, newProps.width, this.spacing)
      }
      let result = this.typesetter.setLines(newProps.lines, newProps.chosenColor)
      this.setState({
        lines: result.sizedLines,
        height: result.totalHeight
      })
    }
  }

  render() {
    let text = 'typeslab.com',
      canvasWidth = this.props.width + this.spacing * 2,
      canvasHeight = this.state.height + this.spacing
    //requestAnimationFrame(_ => requestAnimationFrame(this.calculateBottomPixels.bind(this, canvasHeight)))
    //      <canvas id="debug"></canvas>

    return <div className='Output' style={{backgroundColor: this.props.chosenColor.background, color: this.props.chosenColor.foreground}}>
      <Surface ref="surface" width={canvasWidth} height={canvasHeight} top={0} left={0}>
        <Layer style={{zIndex: 0, width: canvasWidth, height: canvasHeight, top: 0, left: 0, backgroundColor: this.props.chosenColor.background}}/>
        <Layer style={this.getBorderStyle(this.state.height)}/>
        {this.state.lines.map((line) => <Line line={line}/>)}
        <Text style={this.getByLineStyle(text, this.state.height)}>{text}</Text>
      </Surface>
      <Share canvas={this.state.canvas} message={this.props.message} color={this.props.chosenColor} font={this.props.chosenFont}/>
    </div>
  }

  getBorderStyle(height) {
    return {
      borderColor: this.props.chosenColor.foreground,
      top: this.spacing / 2,
      width: this.props.width + this.spacing,
      left: this.spacing / 2,
      height: height,
      zIndex: 1
    }
  }

  getByLineStyle(text, height) {
    let font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 400}),
      size = 8,
      width = measureText(text, 9999, font, size, 15).width
    return {
      fontFace: font,
      fontSize: size,
      backgroundColor: this.props.chosenColor.background,
      color: this.props.chosenColor.foreground,
      textAlign: 'center',
      width: width + 6,
      left: this.props.width / 2 + this.spacing / 4,
      top: height + 11,
      height: 16,
      zIndex: 3
    }
  }
}

Output.contextTypes = {
  flux: React.PropTypes.object
}
