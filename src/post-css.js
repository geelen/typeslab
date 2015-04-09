import insertCss from 'insert-css'
import postcss from 'postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
import vars from 'postcss-simple-vars'
import extend from 'postcss-simple-extend'
let processor = postcss([Autoprefixer("Last 2 Versions"), vars, nested, extend])

let sourceMap = new Map(),
  notLoadedYet = Symbol(),
  linkElement,
  removeElement = (prevElem) => {
    let url = prevElem.getAttribute('href')
    prevElem.parentNode.removeChild(prevElem)
    URL.revokeObjectURL(url)
    //console.log(`CSS removed from URL ${url}`)
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
    //console.log(`CSS of ${processed.length} bytes added as URL ${url}`)
  }

export var fetch = (load, fetch) => {
  let filename = load.metadata.pluginArgument.replace(/\?.*$/,'')
  // Insert blanks into the Map so that load-order is preserved,
  // no matter when the requests come back.
  sourceMap.set(filename, notLoadedYet)
  return fetch(load).then(newSource => {
    sourceMap.set(filename, newSource)

    let prevElem = linkElement,
      allSources = ""

    for (let source of sourceMap.values()) {
      if (source == notLoadedYet) break;
      allSources += source
    }

    createElement(allSources)
    if (prevElem) removeElement(prevElem)

    return ""
  })
}

export var hotReload = (module) => {
  // noop, the fetch already injected the new CSS
  console.log(module)
}
