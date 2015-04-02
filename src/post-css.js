import insertCss from 'insert-css'
import postcss from 'postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
let processor = postcss([nested, Autoprefixer('last 2 versions')])

export var translate = (load) => {
  let processed = processor.process(load.source).css,
    blob = new Blob([processed], {type: 'text/css'}),
    url = URL.createObjectURL(blob),
    elem = document.createElement('link'),
    head = document.getElementsByTagName('head')[0]

  elem.setAttribute('href', url)
  elem.setAttribute('rel', 'stylesheet')
  head.appendChild(elem)

  load.source = ''
}
