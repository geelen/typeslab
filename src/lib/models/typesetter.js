import LineMetrics from './line-metrics'
import DepthMapper from './depth-mapper'
import FontFace from 'react-canvas/lib/FontFace'

let getFontFace = (font) => {
  let options = {weight: font.weight}
  if (font.italic) options.style = 'italic'
  return FontFace(font.name, null, options)
}

const JUSTIFIED = Symbol()
const UNIFORM = Symbol()
export default class Typesetter {
  constructor(typePair, width, spacing, mode) {
    this.typePair = typePair
    this.width = width
    this.spacing = spacing
    this.depthCache = new Map()
    this.setupCanvas()
    this.mode = (mode === "uniform") ? UNIFORM : JUSTIFIED
  }

  setupCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.width = this.width
    this.canvas.height = 900
    this.canvas.style.backgroundColor = "palegoldenrod"
    this.ctx = this.canvas.getContext("2d")
  }

  getMetrics(line) {
    let font = this.typePair.main, text = line;
    if (line.match(/^!/)) {
      font = this.typePair.alt;
      text = text.replace(/^!/, '');
    }
    text = font.caps ? text.toUpperCase() : text
    var fontFace = getFontFace(font);
    return new LineMetrics(this.ctx, this.width, fontFace, text)
  }

  getMinFontSize(metrics) {
    let min = 300
    metrics.forEach(m => {
      if (m.fontSize < min) min = m.fontSize
    })
    return min
  }

  getDepths(lines) {
    let lineMetrics = lines.map(line => this.getMetrics(line)),
      minFontSize = this.getMinFontSize(lineMetrics)
    return lineMetrics.map(metrics => {
      let fontSize = this.mode === JUSTIFIED ? metrics.fontSize : minFontSize,
        key = `${fontSize} ${metrics.fontExpr} ${metrics.text}`
      console.log(fontSize)
      if (!this.depthCache.has(key)) {
        let depth = new DepthMapper(this.ctx, this.width, metrics.fontFace, metrics.text, fontSize)
        this.depthCache.set(key, depth)
      }
      return this.depthCache.get(key)
    })
  }

  setLines(lines, chosenColor) {
    let lineDepths = this.getDepths(lines)
    let totalHeight = this.spacing
    let sizedLines = []
    for (var i = 0; i < lineDepths.length; i++) {
      let line = lineDepths[i], text = line.text
      if (i == 0) {
        totalHeight += line.height / 2 - line.getLeadingFromTop()
      } else {
        let prev = lineDepths[i - 1]
        //totalHeight += prev.height / 2 - prev.getLeadingFromBottom()
        //totalHeight += line.height / 2 - line.getLeadingFromTop()
        totalHeight += 4 + Math.max(line.height / 6, (prev.height + line.height) / 2 - line.getLeading(prev))
      }
      let style = {
        fontSize: line.fontSize,
        height: line.height,
        lineHeight: 0,
        top: totalHeight - line.fontSize,
        width: this.width + this.spacing * 2,
        fontFace: line.fontFace,
        left: 0,
        textAlign: 'center',
        color: chosenColor.foreground,
        zIndex: 2
      }
      if (i == lineDepths.length - 1) {
        totalHeight += line.height / 2 - line.getLeadingFromBottom()
      }
      sizedLines.push({line: text, style})
    }
    return {totalHeight, sizedLines}
  }
}
