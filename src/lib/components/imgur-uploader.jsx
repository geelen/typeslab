import React from 'react'
import 'whatwg-fetch'

export default class ImgurUploader extends React.Component {
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

  render() {
    return <a className="ShareButton" onClick={this.uploadToImgur.bind(this)}>Upload to IMGUR</a>
  }
}
