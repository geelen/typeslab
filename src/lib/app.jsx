import React from 'react'
import FluxComponent from 'flummox/component'
import Frame from './components/frame.jsx!'

class CanvasImage extends React.Component {
  render() {
    return <img style={{backgroundColor: 'white', padding: '1rem'}} width={564} src={this.props.imageUrl}/>
  }
}

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <FluxComponent flux={this.props.flux}>
      <Frame/>
    </FluxComponent>
  }
}
