import React from 'react'
import './share.scss!post-css'
import 'whatwg-fetch'

export default class Share extends React.Component {
  uploadToImgur() {
    let dataUrl = this.props.canvas.toDataURL(),
      data = new FormData()
    data.append("image",this.props.canvas.toDataURL().split(',')[1])
    data.append("type", "base64")
    fetch('https://api.imgur.com/3/image', {
      method: 'post',
      body: data,
      headers: {
        "Authorization": "Client-ID dc208153560e2ef"
      }
    }).then(response => response.json())
    .then(json => console.log(json))
  }
  saveLocally(e) {
    console.log(e.target)
    e.target.href = this.props.canvas.toDataURL()
  }
  render() {
    return <ul className="Share">
      <a onClick={this.uploadToImgur.bind(this)}>Upload to IMGUR</a>
      <a download href='http://glenmaddern.com' onClick={this.saveLocally.bind(this)}>Download to computer</a>
    </ul>
  }
}
