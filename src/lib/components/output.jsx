import React from 'react'
import Surface from 'react-canvas/lib/Surface'
import Layer from 'react-canvas/lib/Layer'
import Text from 'react-canvas/lib/Text'
import FontFace from 'react-canvas/lib/FontFace'
import Share from './share.jsx!'
import measureText from 'react-canvas/lib/measureText'
import './output.scss!post-css'

let getFontFace = (font) => {
  let options = {weight: font.weight}
  if (font.italic) options.style = 'italic'
  return FontFace(font.name, null, options)
}

class Line extends React.Component {
  render() {
    return <Text style={this.props.line.style}>{this.props.line.line}</Text>
  }
}

class Typesetter {
  constructor() {
  }

  setLines(lines, chosenFont, canvasWidth, chosenColor, spacing) {
    let totalHeight = spacing
    let sizedLines = lines.map(line => {
      let text = line, font, defaultLH, defaultPP
      if (!text.match(/^!/)) {
        font = chosenFont.main
        defaultLH = 1.35
        defaultPP = 0.15
      } else {
        text = text.replace(/^!/, '')
        font = chosenFont.alt
        defaultLH = 1.5
        defaultPP = 0.15
      }
      text = font.caps ? text.toUpperCase() : text
      let fontFace = getFontFace(font),
        measurements = measureText(text, 9999, fontFace, 12, 15),
        factor = canvasWidth / measurements.width,
        fontSize = Math.min(300, 12 * factor),
        lineHeight = fontSize * (typeof font.lineHeightFactor == "undefined" ? defaultLH : font.lineHeightFactor),
        style = {
          fontSize,
          height: fontSize * 2,
          lineHeight: fontSize * 2,
          top: totalHeight + lineHeight * (typeof font.lineHeightFactor == "undefined" ? defaultPP : font.prePaddingFactor),
          width: canvasWidth + spacing * 2,
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
    this.typesetter = new Typesetter()
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.surface.getDOMNode()
    })
  }

  componentWillReceiveProps(newProps) {
    this.typesetter = new Typesetter() // remove after devving for caching power
    if (newProps.chosenFont) {
      let result = this.typesetter.setLines(newProps.lines, newProps.chosenFont, newProps.width, newProps.chosenColor, this.spacing)
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
