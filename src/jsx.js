const BUILD_MODE = typeof window === 'undefined'

import reactTools from 'react-tools'
import ReactMount from 'react/lib/ReactMount'
import reactHotApi from 'react-hot-api'
import path from 'path'
import pascalCase from 'pascal-case'

let classNameFromFilename = (filename) => {
  return pascalCase(path.basename(filename,path.extname(filename)))
}
let reexportHotVersionSnippet = (className) => `
  console.log("Hot reloading ${className}!")
  import ReactMount from 'react/lib/ReactMount'
  import reactHotApi from 'react-hot-api'
  if (!window.__jsxHot) window.__jsxHot = {}
  if (!__jsxHot.${className}) __jsxHot.${className} = reactHotApi(_ => ReactMount._instancesByReactRootID)
  let hotted = __jsxHot.${className}(${className})
  export {hotted as default}
`

export let translate = load => {
  let snippet = BUILD_MODE ? '' : reexportHotVersionSnippet(classNameFromFilename(load.metadata.pluginArgument)),
    output = reactTools.transformWithDetails(load.source + snippet, {es6module: true})
  load.source = output.code;
  load.metadata.sourceMap = output.sourceMap;
}

export let hotReload = module => {
  // Noop here either. This only runs on the updated modules, not on
  // the first one, and the react-hot-reloader needs to be injected
  // from the very beginning.
}
