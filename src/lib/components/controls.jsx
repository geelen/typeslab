import React from 'react'
import MessageEntry from './message-entry.jsx!'
import './controls.scss!post-css'
import ReactMount from 'react/lib/ReactMount'
import reactHotApi from 'react-hot-api'

export default class Controls extends React.Component {
  render() {
    return <div className="Controls">
      <h2>Enter your message:</h2>
      <MessageEntry />
    </div>
  }
}

Controls.contextTypes = {
  flux: React.PropTypes.object
}

console.log("controls.jsx executed!")

if (!window.__jsxHot) window.__jsxHot = {}
if (!__jsxHot.Controls) __jsxHot.Controls = reactHotApi(_ => ReactMount._instancesByReactRootID)
let hotted = __jsxHot.Controls(Controls)
export {hotted as default}
