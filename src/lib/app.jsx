import React from 'react'
import FluxComponent from 'flummox/component'

import Controls from './components/controls/controls.jsx!'
import Output from './components/output/output.jsx!'

export default
class App extends React.Component {
  render() {
    return <div className="flex">
      <Controls></Controls>
      <FluxComponent flux={this.props.flux} connectToStores='messages'>
        <Output></Output>
      </FluxComponent>
    </div>
  }
}
