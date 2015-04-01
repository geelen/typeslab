import insertCss from 'insert-css'
import postcss from 'postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
let processor = postcss([nested, Autoprefixer('last 2 versions')])

export var translate = (load) => {
  insertCss(processor.process(load.source).css)
  load.source = ''
}
