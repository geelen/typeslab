import postcss from 'postcss'
import pluginPostcss from 'plugin-postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
import vars from 'postcss-simple-vars'
import mixins from 'postcss-mixins'
import traits from 'postcss-traits'

let processor = postcss([Autoprefixer("Last 2 Versions"), traits, mixins, vars, nested]),
  { fetch, hotReload, bundle } = pluginPostcss(processor)

export { fetch, hotReload, bundle };
