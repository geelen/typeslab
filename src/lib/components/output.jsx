import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Layer from 'react-canvas/lib/Layer'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import Share from './share.jsx!'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'
import F from 'fkit'

class Line extends React.Component {
  render() {
    return <Text style={this.props.line.style}>{this.props.line.line}</Text>
  }
}

let getFontFace = (font) => {
  let options = {weight: font.weight}
  if (font.italic) options.style = 'italic'
  return FontFace(font.name, null, options)
}
class LineMetrics {
  constructor(ctx, width, font, text) {
    this.text = text
    this.width = width
    let fontFace = getFontFace(font),
      fontExpr = size => fontFace.attributes.style + ' normal ' + fontFace.attributes.weight + ' ' + size + 'pt ' + fontFace.family
    ctx.font = fontExpr(18)
    let naturalWidth = ctx.measureText(text).width,
      fontSize = Math.min(300, 18 * width / naturalWidth)
    this.height = fontSize * 3

    ctx.font = fontExpr(fontSize)
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.fillStyle = "black"
    ctx.textAlign = 'center'
    ctx.fillText(text, this.width / 2, this.height / 2, this.width)
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
          //console.log([this.height, this.width, line, col])
          //console.log(bottomCellIdx)
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

  getMinLeading(prevMetrics) {
    let min = this.height / 2 + prevMetrics.height / 2
    for (var i = 0; i < this.topDepth.length; i++) {
      var d1 = this.topDepth[i], d2 = prevMetrics.bottomDepth[i]
      if (d1 > 0 && d2 > 0 && (d1 + d2) < min) min = d1 + d2
    }
    return min
  }
}

class Typesetter {
  constructor(typePair, width, spacing) {
    this.typePair = typePair
    console.log(this.font)
    this.width = width
    this.spacing = spacing
    this.metricsCache = new Map()
    this.setupCanvas()
  }

  setupCanvas() {
    this.canvas = document.querySelector('body > canvas') || document.querySelector("body").appendChild(document.createElement("canvas"))
    this.canvas.width = this.width
    this.canvas.height = 600
    this.ctx = this.canvas.getContext("2d")
  }

  getMetrics(line) {
    if (!this.metricsCache.has(line)) {
      let font = this.typePair.main, text = line;
      if (line.match(/^!/)) {
        font = this.typePair.alt;
        text = text.replace(/^!/, '');
      }
      text = font.caps ? text.toUpperCase() : text
      this.metricsCache.set(line, new LineMetrics(this.ctx, this.width, font, text))
    }
    return this.metricsCache.get(line)
  }

  setLines(lines, chosenColor) {
    let linesWithMetrics = lines.map(line => this.getMetrics(line))
    console.log(linesWithMetrics)
    console.log(linesWithMetrics[0].getLeadingFromTop())
    console.log(linesWithMetrics[1].getMinLeading(linesWithMetrics[0]))
    console.log(linesWithMetrics[1].getLeadingFromBottom())
    let totalHeight = this.spacing
    let sizedLines = lines.map(line => {
      let text = line, font, defaultLH, defaultPP
      if (!text.match(/^!/)) {
        font = this.typePair.main
        defaultLH = 1.35
        defaultPP = 0.15
      } else {
        text = text.replace(/^!/, '')
        font = this.typePair.alt
        defaultLH = 1.5
        defaultPP = 0.15
      }
      text = font.caps ? text.toUpperCase() : text
      let fontFace = getFontFace(font),
        measurements = measureText(text, 9999, fontFace, 12, 15),
        factor = this.width / measurements.width,
        fontSize = Math.min(300, 12 * factor),
        lineHeight = fontSize * (typeof font.lineHeightFactor == "undefined" ? defaultLH : font.lineHeightFactor),
        style = {
          fontSize,
          height: fontSize * 2,
          lineHeight: fontSize * 2,
          top: totalHeight + lineHeight * (typeof font.lineHeightFactor == "undefined" ? defaultPP : font.prePaddingFactor),
          width: this.width + this.spacing * 2,
          fontFace,
          left: 0,
          textAlign: 'center',
          color: chosenColor.foreground,
          zIndex: 2
        }
      totalHeight += lineHeight
      return {line: text, style}
    })
    return {totalHeight, sizedLines}
  }
}

export default class Output extends React.Component {
  constructor() {
    super()
    this.spacing = 32
    this.state = {lines: [], height: this.spacing}
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.surface.getDOMNode()
    })
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.chosenFont) {
      if (newProps.chosenFont != oldProps.chosenFont) {
        this.typesetter = new Typesetter(newProps.chosenFont, newProps.width, this.spacing)
      }
      let result = this.typesetter.setLines(newProps.lines, newProps.chosenColor)
      this.setState({
        lines: result.sizedLines,
        height: result.totalHeight
      })
    }
  }

  render() {
    let text = 'typeslab.com',
      canvasWidth = this.props.width + this.spacing * 2,
      canvasHeight = this.state.height + this.spacing
    //requestAnimationFrame(_ => requestAnimationFrame(this.calculateBottomPixels.bind(this, canvasHeight)))
    //      <canvas id="debug"></canvas>

    return <div className='Output' style={{backgroundColor: this.props.chosenColor.background, color: this.props.chosenColor.foreground}}>
      <Surface ref="surface" width={canvasWidth} height={canvasHeight} top={0} left={0}>
        <Layer style={{zIndex: 0, width: canvasWidth, height: canvasHeight, top: 0, left: 0, backgroundColor: this.props.chosenColor.background}}/>
        <Layer style={this.getBorderStyle(this.state.height)}/>
        {this.state.lines.map((line) => <Line line={line}/>)}
        <Text style={this.getByLineStyle(text, this.state.height)}>{text}</Text>
      </Surface>
      <Share canvas={this.state.canvas} message={this.props.message} color={this.props.chosenColor} font={this.props.chosenFont}/>
    </div>
  }

  getBorderStyle(height) {
    return {
      borderColor: this.props.chosenColor.foreground,
      top: this.spacing / 2,
      width: this.props.width + this.spacing,
      left: this.spacing / 2,
      height: height,
      zIndex: 1
    }
  }

  getByLineStyle(text, height) {
    let font = FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 400}),
      size = 8,
      width = measureText(text, 9999, font, size, 15).width
    return {
      fontFace: font,
      fontSize: size,
      backgroundColor: this.props.chosenColor.background,
      color: this.props.chosenColor.foreground,
      textAlign: 'center',
      width: width + 6,
      left: this.props.width / 2 + this.spacing / 4,
      top: height + 11,
      height: 16,
      zIndex: 3
    }
  }

  calculateBottomPixels(height) {
    let c = document.querySelector('canvas#debug')
    let ctx = c.getContext("2d"),
      typeCtx = this.state.canvas.getContext("2d"),
      scale = window.devicePixelRatio,
      topLeft = scale * (this.spacing / 2 + 2),
      w = Math.floor(scale * (this.props.width + this.spacing - 4)),
      h = Math.floor(scale * (height - this.spacing - 10))
    console.log(h)
    c.width = this.state.canvas.width
    c.height = this.state.canvas.height

    let pxData = typeCtx.getImageData(topLeft, topLeft, w, h)
    ctx.putImageData(pxData, 0, 0)

    let thirtyTwo = new Uint32Array(pxData.data.buffer)
    let backgroundRgb = getComputedStyle(this.state.canvas.parentNode).backgroundColor,
      [_, r,g,b] = backgroundRgb.split(/[^\d\.]+/).map(x => parseInt(x)),
      tmpBuffer = new ArrayBuffer(4),
      tmpView = new Uint8ClampedArray(tmpBuffer)
    tmpView[0] = r
    tmpView[1] = g
    tmpView[2] = b
    tmpView[3] = 255
    let bgInt = new Uint32Array(tmpBuffer)[0],
      count = 0,
      l = thirtyTwo.length,
      depthBuffer = new ArrayBuffer(4 * w),
      depth = new Uint32Array(depthBuffer)

    for (var line = 0; line < h; line++) {
      for (var col = 0; col < w; col++) {
        if (depth[col]) continue

        var i = (h - line - 1) * w + col
        if (thirtyTwo[i] === bgInt) {
          count++
        } else {
          depth[col] = line
        }
      }
    }
    console.log(`${count} of ${l} pixels are bg (${Math.round(100 * count / l)}%)`)
    ctx.fillStyle = "rgba(255,0,0,1.0)"
    for (let x of depth.entries()) {
      if (x[1]) {
        ctx.fillRect(x[0], h - x[1], 1, 1)
      }
    }

  }
}

Output.contextTypes = {
  flux: React.PropTypes.object
}
