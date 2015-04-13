import React from 'react'
import './share.scss!post-css'
import ImgurUploader from './imgur-uploader.jsx!'

export default class Share extends React.Component {
  saveLocally(e) {
    console.log(e.target)
    e.target.href = this.props.canvas.toDataURL()
  }
  render() {
    return <ul className="Share">
      <ImgurUploader canvas={this.props.canvas}/>
      <a className="ShareButton" download onClick={this.saveLocally.bind(this)}>Download to computer</a>
    </ul>
  }
}
