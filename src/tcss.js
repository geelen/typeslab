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

let plugin = (css, result) => {
  css.eachRule(rule => {
    console.log(rule)
  })
}


let plugins = [plugin],
  { fetch: __fetch, hotReload, bundle } = pluginPostcss(plugins)

let fetch = (l, f) => {
  return __fetch(l, f).then(_ => {
    return "module.exports = {true: 'dat'}"
  })
}

export { fetch, hotReload, bundle };
