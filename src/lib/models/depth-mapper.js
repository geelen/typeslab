export default class DepthMapper {
  constructor(ctx, width, fontFace, text, fontSize, alignment) {
    this.width = width
    this.fontFace = fontFace
    this.fontSize = fontSize
    this.text = text
    this.height = Math.floor(this.fontSize * 3)
    ctx.font = `${this.fontFace.attributes.style} normal ${this.fontFace.attributes.weight} ${this.fontSize}pt ${this.fontFace.family}`
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.fillStyle = "black"
    ctx.textAlign = alignment
    let anchor = (alignment === "center") ? this.width / 2 : 0
    ctx.fillText(text, anchor, this.height / 2, this.width)
    this.calculateDepthMap(ctx.getImageData(0, 0, this.width, this.height))
  }

  calculateDepthMap(imageData) {
    let pixels = new Uint32Array(imageData.data.buffer),
      topBuffer = new ArrayBuffer(this.width * 4),
      bottomBuffer = new ArrayBuffer(this.width * 4)
    this.topDepth = new Uint32Array(topBuffer)
    this.bottomDepth = new Uint32Array(bottomBuffer)

    for (var line = 0; line < this.height; line++) {
      for (var col = 0; col < this.width; col++) {
        if (!this.topDepth[col]) {
          var topCellIdx = line * this.width + col
          if (pixels[topCellIdx] !== 0) this.topDepth[col] = line
        }
        if (!this.bottomDepth[col]) {
          var bottomCellIdx = (this.height - line - 1) * this.width + col
          if (pixels[bottomCellIdx] !== 0) this.bottomDepth[col] = line
        }
      }
    }
  }

  getMinDepth(depth) {
    let min = this.height / 2
    for (var i = 0; i < depth.length; i++) {
      var d = depth[i]
      if (d > 0 && d < min) min = d
    }
    return min
  }

  getLeadingFromTop() {
    return this.getMinDepth(this.topDepth)
  }

  getLeadingFromBottom() {
    return this.getMinDepth(this.bottomDepth)
  }

  getLeading(prevMetrics) {
    let min = this.height / 2 + prevMetrics.height / 2
    for (var i = 0; i < this.topDepth.length; i++) {
      var d1 = this.topDepth[i], d2 = prevMetrics.bottomDepth[i]
      if (d1 > 0 && d2 > 0 && (d1 + d2) < min) min = d1 + d2
    }
    return min
  }

}
