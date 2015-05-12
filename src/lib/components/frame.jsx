import React from 'react'
import FluxComponent from 'flummox/component'
import T from './frame.tcss!'

import Controls from './controls.jsx!'
import Output from './output.jsx!'

export default class Frame extends React.Component {
  render() {
    console.log(T)
    let traits = obj => {
      return Object.keys(obj).map(k => {
        return [`t-${k}`].concat(obj[k].split(" ")).map(v => `t-${k}:${v}`).join(" ")
      })
    }
    return <div className={T.frame}>
      <header className={T.header}>
        <h1 className="Frame-Logo">
          <span>Type</span><span>Slab</span>
        </h1>
      </header>
      <main>
        <Controls></Controls>
        <FluxComponent connectToStores={['message','fonts','colors']}>
          <Output width={500} />
        </FluxComponent>
      </main>
      <footer className="t-color t-color:inverted">
        <p>Made with &lt;3 by <a href="http://glenmaddern.com" target="_blank">Glen Maddern</a></p>
        {' '}
        <p>View source <a target="_blank" href="https://github.com/geelen/typeslab">on GitHub</a></p>
      </footer>
    </div>
  }
}
