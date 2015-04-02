// Inject the styles (async obvs)
import '../styles/core.scss!post-css'

import React from 'react'
import App from './app.jsx!'
import Flux from './flux'

const flux = new Flux()

React.render(React.createElement(App, {flux}), document.querySelector('main'))
