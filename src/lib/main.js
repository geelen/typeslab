// Inject the styles (async obvs)
import '../styles/core.scss!post-css'

import React from 'react'
import App from './app.jsx!'
import Flux from './stores/message'

const flux = new Flux()
flux.getActions('messages').changeMessage("Something over\ntwo lines")
setTimeout(_ => {
  flux.getActions('messages').changeMessage("Something over\nthree\nwhole lines")
}, 2000)

React.render(React.createElement(App, {flux}), document.querySelector('main'))
