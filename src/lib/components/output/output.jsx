import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'

class Line extends React.Component {
  componentDidMount() {
    console.log(this.props.ctx)
  }
  render() {
    return <Text style={this.props.line.style}>{this.props.line.line}</Text>
  }
}

export default class Output extends React.Component {
  constructor() {
    super()
    this.font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 900})
    this.state = {}
  }

  componentDidMount() {
    let ctx = this.refs.surface.getDOMNode().getContext('2d')
    this.setState({ctx})
  }

  render() {
    let lines = this.layoutLines(this.props.lines)
    console.log(lines)
    return <div className='Output'>
      <h1>Output</h1>
      <Surface ref="surface" width={this.props.width} height={lines.totalHeight + 4} top={0} left={0}>
        {this.state.ctx && lines.sizedLines.map((line) => {
          return <Line line={line} ctx={this.state.ctx}/>
        })}
      </Surface>
    </div>
  }

  layoutLines(lines) {
    let totalHeight = 0,
      sizedLines = lines.map(line => {
        console.log(line)
        let measurements = measureText(line, 9999, this.font, 12, 15),
          factor = this.props.width / measurements.width,
          fontSize = 12 * factor,
          style = {fontSize, height: fontSize, lineHeight: fontSize, top: totalHeight, width: 9999, fontFace: this.font, left: 0}
        totalHeight += fontSize - 2
        console.log(measurements)
        return {line, style}
      })
    return { totalHeight, sizedLines }
  }
}
