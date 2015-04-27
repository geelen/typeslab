export default class LineMetrics {
  constructor(ctx, width, fontFace, text) {
    this.text = text
    this.width = width
    this.fontFace = fontFace
    ctx.font = `${this.fontFace.attributes.style} normal ${this.fontFace.attributes.weight} 18pt ${this.fontFace.family}`
    let fontExpr = size => this.fontFace.attributes.style + ' normal ' + this.fontFace.attributes.weight + ' ' + size + 'pt ' + this.fontFace.family
    ctx.font = fontExpr(18)
    let naturalWidth = ctx.measureText(text).width
    this.fontSize = Math.min(300, 18 * width / naturalWidth)
  }
}
