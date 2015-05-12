/* BURNDOWN TICKETS

- Generate the trait classes themselves
  I like a standalone DSL, which can generate classes or attribute
  module format. Needs to export the permitted values.
- Trigger live-reloading when editing traits by reexporting the class names
- Allow variables in the traits as well
 */

import pluginPostcss from 'plugin-postcss'
//import Autoprefixer from 'autoprefixer-core'
//awaiting a fix for https://github.com/jspm/npm/issues/52
//using the 'standalone build of Autoprefixer' (https://github.com/postcss/autoprefixer/blob/d9d3f27f7600f5111eb791e198a53459f0235217/README.md#javascript)
//import Autoprefixer from './autoprefixer'
//import nested from 'postcss-nested'
//import vars from 'postcss-simple-vars'
//import mixins from 'postcss-mixins'
//import traits from 'postcss-traits'
import TCSS from './tcss-plugin'

let tcss = new TCSS()
let plugins = [tcss.getPlugin()],
  { fetch: __fetch, hotReload, bundle } = pluginPostcss(plugins)

let fetch = (load, f) => {
  return __fetch(load, f).then(_ => {
    let filename = load.metadata.pluginArgument.replace(/\?.*$/, '')
    return `module.exports = ${tcss.getClasses(filename)}`
  })
}

export { fetch, hotReload, bundle };
