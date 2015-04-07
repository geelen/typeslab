import React from 'react'
import FluxComponent from 'flummox/component'

import Controls from './controls.jsx!'
import Output from './output.jsx!'

export default class Frame extends React.Component {
  render() {
    return <div className="flex wrap">
      <Controls flux={this.props.flux}></Controls>
      <FluxComponent connectToStores='messages'>
        <Output width={500}></Output>
      </FluxComponent>
    </div>
  }
}
