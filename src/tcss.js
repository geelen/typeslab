import pluginPostcss from 'plugin-postcss'
//import Autoprefixer from 'autoprefixer-core'
//awaiting a fix for https://github.com/jspm/npm/issues/52
//using the 'standalone build of Autoprefixer' (https://github.com/postcss/autoprefixer/blob/d9d3f27f7600f5111eb791e198a53459f0235217/README.md#javascript)
//import Autoprefixer from './autoprefixer'
//import nested from 'postcss-nested'
//import vars from 'postcss-simple-vars'
//import mixins from 'postcss-mixins'
//import traits from 'postcss-traits'
import postcss from 'postcss'

let traits = {
  flex: {
    default: {
      "display": "flex"
    },
    vertical: {
      "flex-direction": "vertical"
    }
  }
}

let scopes = new Map()

let plugin = (css, result) => {
  let currentFile = null,
    toClassName = (f) => `${f.replace(/\W/g,'_')}`
  console.log(css)
  css.eachInside(rule => {
    if (rule.type == "comment" && rule.text.startsWith("SOURCE")) {
      let match = rule.text.match(/SOURCE=(.*)/);
      currentFile = match ? match[1] : null;
    } else if (rule.type == "rule" && rule.selector.startsWith(":")) {
      if (currentFile) {
        if (!scopes.get(currentFile)) scopes.set(currentFile, {})
        let className = toClassName([currentFile, rule.selector].join())
        scopes.get(currentFile)[rule.selector.replace(/^:/,'')] = className
        rule.selector = "." + className
        console.log(scopes)
      } else {
        console.error(`Missing SOURCE to export scoped rule ${rule.selector}`)
      }
    }
  })
}


let plugins = [plugin],
  { fetch: __fetch, hotReload, bundle } = pluginPostcss(plugins)

let fetch = (load, f) => {
  return __fetch(load, f).then(_ => {
    var filename = load.metadata.pluginArgument.replace(/\?.*$/, '')
    let classMappings = scopes.get(filename)
    console.log(classMappings)
    return `module.exports = ${JSON.stringify(classMappings || {})}`
  })
}

export { fetch, hotReload, bundle };
