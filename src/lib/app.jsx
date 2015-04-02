import React from 'react'
import FluxComponent from 'flummox/component'

import Controls from './components/controls/controls.jsx!'
import Output from './components/output/output.jsx!'

class Main extends React.Component {
  render() {
    return <div className="flex">
      <Controls flux={this.props.flux}></Controls>
      <FluxComponent connectToStores='messages'>
        <Output></Output>
      </FluxComponent>
    </div>
  }
}

export default class App extends React.Component {
  render() {
    return <FluxComponent flux={this.props.flux}>
      <Main/>
    </FluxComponent>
  }
}
