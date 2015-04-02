import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Text from 'react-canvas/lib/Text'
import './output.scss!post-css'

export default class Output extends React.Component {
  render() {
    const textStyle = this.getTextStyle()
    return <div className='Output'>
      <h1>Output</h1>
      <Surface width={500} height={400} top={0} left={0}>
        <Text style={textStyle}>{this.props.message}</Text>
      </Surface>
    </div>
  }

  getTextStyle() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }
}
