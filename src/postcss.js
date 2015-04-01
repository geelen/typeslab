import insertCss from 'insert-css'

export var translate = (load) => {
  insertCss(load.source)
  load.source = ''
}
