import postcss from 'postcss'
import pluginPostcss from 'plugin-postcss'
import Autoprefixer from 'autoprefixer-core'
import nested from 'postcss-nested'
import vars from 'postcss-simple-vars'
import mixins from 'postcss-mixins'

let traits = (css, result) => {
  css.eachAtRule(rule => {
    if (rule.name == 'trait') {
      let expressions = rule.params.replace(/^\(|\)$/g, '').split(/, +/)
      expressions.forEach(expression => {
        let [trait, args] = expression.split(/: +/)
        rule.parent.insertBefore(rule, postcss.atRule({name: "mixin", params: trait, source: rule.source}))
        if (args) args.split(" ").forEach(arg => {
          rule.parent.insertBefore(rule, postcss.atRule({name: "mixin", params: `${trait}:${arg}`, source: rule.source}))
        })
      })
      rule.removeSelf()
    }
  })
}

let processor = postcss([Autoprefixer("Last 2 Versions"), traits, mixins, vars, nested]),
  { fetch, hotReload, bundle } = pluginPostcss(processor)

export { fetch, hotReload, bundle };
