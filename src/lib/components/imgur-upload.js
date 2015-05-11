import 'whatwg-fetch'

export default {
  uploadSingleImage(canvas, description) {
    let data = new FormData()
    data.append("image", canvas.toDataURL().split(',')[1])
    data.append("type", "base64")
    if (description) data.append("description", description)
    return fetch('https://api.imgur.com/3/image', {
      method: 'post',
      body: data,
      headers: {
        "Authorization": "Client-ID dc208153560e2ef"
      }
    }).then(response => response.json())
  },

  createAlbum(imageIds, title) {
    let data = new FormData()
    data.append("ids", imageIds.join(','))
    data.append("title", title)
    return fetch('https://api.imgur.com/3/album', {
      method: 'post',
      body: data,
      headers: {
        "Authorization": "Client-ID dc208153560e2ef"
      }
    }).then(response => response.json())
  }
}
