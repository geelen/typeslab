import React from 'react'
import './share.scss!post-css'
import 'whatwg-fetch'

export default class Share extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillReceiveProps(newProps) {
    if (newProps.message != this.props.message || newProps.color != this.props.color || newProps.font != this.props.font) {
      this.setState({link: undefined})
    }
  }

  uploadToImgur() {
    this.setState({uploading: true})
    let data = new FormData()
    data.append("image", this.props.canvas.toDataURL().split(',')[1])
    data.append("type", "base64")
    data.append("description", "Made with http://typeslab.com")
    fetch('https://api.imgur.com/3/image', {
      method: 'post',
      body: data,
      headers: {
        "Authorization": "Client-ID dc208153560e2ef"
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({uploading: false})
        if (json.success) {
          this.setState({link: json.data.link})
        } else {
          let message = json.data.error.match(/anonymous uploading in your country has been disabled/) ? "Sorry, IMGUR has blocked anonymous uploads from your country" : json.data.error
          this.setState({failed: true, failure: message})
        }
      })
  }

  saveLocally(e) {
    e.target.href = this.props.canvas.toDataURL()
  }

  render() {
    return <ul className="Share">
      { this.state.failure ? <p>{this.state.failure}</p> : '' }
      { this.state.uploading ? <p>Uploading...</p> : '' }
      { this.state.link ? <p>Uploaded to <a href={this.state.link} target="_blank">{this.state.link}</a></p> : '' }
      <button disabled={this.state.link || this.state.uploading || this.state.failed} className="ShareButton" onClick={this.uploadToImgur.bind(this)}>Upload to IMGUR</button>
      <a href className="ShareButton" download onClick={this.saveLocally.bind(this)}>Save locally</a>
    </ul>
  }
}
