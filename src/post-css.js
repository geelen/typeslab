import insertCss from 'insert-css'
import postcss from 'postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
let processor = postcss([nested, Autoprefixer('last 2 versions')])

function escape(source) {
  return source
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029");
}

export var translate = (load) => {
  let processed = processor.process(load.source).css

  return `
    (function(css) {
      var blob = new Blob([css], {type: 'text/css'}),
        url = URL.createObjectURL(blob),
        elem = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
      elem.setAttribute('href', url)
      elem.setAttribute('rel', 'stylesheet')
      head.appendChild(elem)
    })("${escape(processed)}");
  `
}
