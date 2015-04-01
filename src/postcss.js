import insertCss from 'insert-css'
import Autoprefixer from 'autoprefixer-core'
let autoprefixer = Autoprefixer('last 2 versions')

export var translate = (load) => {
  console.log(load.source)
  console.log(autoprefixer)
  insertCss(autoprefixer.process(load.source).css)
  load.source = ''
}
