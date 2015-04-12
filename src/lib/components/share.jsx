import React from 'react'
import './share.scss!post-css'
import 'whatwg-fetch'

export default class Share extends React.Component {
  uploadToImgur() {
    console.log()
    let dataUrl = this.props.canvas.toDataURL(),
      data = new FormData()
    data.append("image",this.props.canvas.toDataURL().split(',')[1],"typeslab.png")
    data.append("type", "base64")
    fetch('https://api.imgur.com/3/image', {
      method: 'post',
      body: JSON.stringify({
        type: 'base64',
        image: this.props.canvas.toDataURL(),
        key: "dc208153560e2ef"
      })
    })
  }
  render() {
    return <ul>
      <li onClick={this.uploadToImgur.bind(this)}>Save to IMGUR</li>
    </ul>
  }
}
