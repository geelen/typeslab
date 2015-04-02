import React from 'react'

import Controls from './components/controls/controls.jsx!'
import Output from './components/output/output.jsx!'

export default
class App extends React.Component {
  render() {
    return <div className="flex">
      <Controls></Controls>
      <Output></Output>
    </div>
  }
}
