import '../styles/index'
import React from 'react'
import App from './app.jsx!'
import Flux from './flux'

const flux = new Flux()

React.render(React.createElement(App, {flux}), document.querySelector('main'))
