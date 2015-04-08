import insertCss from 'insert-css'
import postcss from 'postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
let processor = postcss([nested, Autoprefixer('last 2 versions')])

let sourceMap = new Map(),
  linkElement,
  removeElement = (prevElem) => {
    let url = prevElem.getAttribute('href')
    prevElem.parentNode.removeChild(prevElem)
    URL.revokeObjectURL(url)
    console.log(`CSS removed from URL ${url}`)
  },
  createElement = (source) => {
    let processed = processor.process(source).css,
        blob = new Blob([processed], {type: 'text/css'}),
        url = URL.createObjectURL(blob),
        head = document.getElementsByTagName('head')[0]

    linkElement = document.createElement('link')
    linkElement.setAttribute('href', url)
    linkElement.setAttribute('rel', 'stylesheet')
    head.appendChild(linkElement)
    console.log(`CSS of ${processed.length} bytes added as URL ${url}`)
  }

export var translate = (load) => {
  let filename = load.metadata.pluginArgument
  sourceMap.set(filename, load.source)

  let prevElem = linkElement,
    fullSource = ""

  for (let source of sourceMap.values()) {
    fullSource += source
  }

  load.source = ''
  createElement(fullSource)
  if (prevElem) removeElement(prevElem)
}

export var reloadable = true
