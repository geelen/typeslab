import React from 'react'
import './output.scss!post-css'

export default class Output extends React.Component {
  render() {
    return <div className='Output'>
      <h1>Output</h1>
      <p>{this.props.message}</p>
    </div>
  }
}
