import postcss from 'postcss'

export default class TCSS {
  constructor() {
    this.scopes = new Map()
  }

  getPlugin() {
    return this.plugin.bind(this)
  }

  getClasses(filename) {
    let classMappings = this.scopes.get(filename)
    return JSON.stringify(classMappings || {})
  }

  plugin(css, result) {
    let currentFile = null,
      toClassName = (f) => `${f.replace(/\W/g, '_')}`
    console.log(css)
    css.eachInside(rule => {
      if (rule.type == "comment" && rule.text.startsWith("SOURCE")) {
        let match = rule.text.match(/SOURCE=(.*)/);
        currentFile = match ? match[1] : null;
      } else if (rule.type == "rule" && rule.selector.startsWith(":")) {
        if (currentFile) {
          if (!this.scopes.get(currentFile)) this.scopes.set(currentFile, {})
          let className = toClassName([currentFile, rule.selector].join())
          this.scopes.get(currentFile)[rule.selector.replace(/^:/, '')] = className
          rule.selector = "." + className
          console.log(this.scopes)
        } else {
          console.error(`Missing SOURCE to export scoped rule ${rule.selector}`)
        }
      }
    })
  }
}
