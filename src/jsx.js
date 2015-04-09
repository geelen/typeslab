import reactTools from 'react-tools'
import React from 'react'
import ReactMount from 'react/lib/ReactMount'
import reactHotApi from 'react-hot-api'

export var fetch = (load, fetch) => {
  console.log("=> " + load.address)
  return fetch(load)
}
export var translate = load => {
  console.log("<= " + load.address)
  var output = reactTools.transformWithDetails(load.source, {es6module: true});
  load.source = output.code;
  console.log(load.source)
  load.metadata.sourceMap = output.sourceMap;
}

export var hotReload = module => {
  //let reactHotReload = reactHotApi(_ => ReactMount._instancesByReactRootID)
  //console.log(reactHotReload)
  //console.log(module)
  //console.log(module.default.prototype instanceof React.Component)
  //reactHotReload(module.default)
}
