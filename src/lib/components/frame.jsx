import React from 'react'
import FluxComponent from 'flummox/component'
import './frame.scss!post-css'

import Controls from './controls.jsx!'
import Output from './output.jsx!'

export default class Frame extends React.Component {
  render() {
    return <div className="Frame">
      <header><h1>TypeSlab</h1></header>
      <Controls></Controls>
      <FluxComponent connectToStores='messages'>
        <Output width={500}></Output>
      </FluxComponent>
    </div>
  }
}
