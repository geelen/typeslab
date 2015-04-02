import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'

export default class Output extends React.Component {
  constructor() {
    super()
    this.font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 900})
  }
  render() {
    console.log(this.props.lines)
    return <div className='Output'>
      <h1>Output</h1>
      <Surface width={500} height={400} top={0} left={0}>
        {this.props.lines.map((line, i) => {
          console.log(measureText(line.toUpperCase(), 500, this.font, 12, 20))
          return <Text style={this.textStyle(i)}>{line.toUpperCase()}</Text>
        })}
      </Surface>
    </div>
  }

  textStyle(i) {
    return {
      top: i * 20,
      left: 0,
      width: 500,
      height: 20,
      lineHeight: 20,
      fontSize: 12,
      fontFace: this.font
    };
  }
}
