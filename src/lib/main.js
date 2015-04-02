// Inject the styles (async obvs)
import '../styles/core.scss!post-css'

import React from 'react'
import App from './app.jsx!'

React.render(App, document.querySelector('main'))
