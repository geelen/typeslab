export default class LineMetrics {
  constructor(ctx, width, fontFace, text) {
    this.text = text
    this.width = width
    this.fontFace = fontFace
    this.fontExpr = `${this.fontFace.attributes.style} normal ${this.fontFace.attributes.weight} 18pt ${this.fontFace.family}`
    ctx.font = this.fontExpr
    let naturalWidth = ctx.measureText(text).width
    this.fontSize = Math.min(300, 18 * width / naturalWidth)
  }
}
