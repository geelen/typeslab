import postcss from 'postcss'

export default class TCSS {
  constructor(traits) {
    this.traits = traits
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
    this.currentFile = null
    css.eachInside(rule => {
      if (rule.type == "comment" && rule.text.startsWith("SOURCE")) {
        this.handleSourceComment(rule)
      } else if (rule.type == "rule" && rule.selector.startsWith(":")) {
        this.handlePlaceholder(rule)
      } else if (rule.type == "decl" && this.traits[rule.prop]) {
        this.handleTrait(rule, this.traits[rule.prop])
      }
    })
  }

  handleSourceComment(rule) {
    let match = rule.text.match(/SOURCE=(.*)/);
    this.currentFile = match ? match[1] : null;
  }

  handlePlaceholder(rule) {
    let toClassName = (f) => `${f.replace(/\W/g, '_')}`
    if (this.currentFile) {
      if (!this.scopes.get(this.currentFile)) this.scopes.set(this.currentFile, {})
      let className = toClassName([this.currentFile, rule.selector].join())
      this.scopes.get(this.currentFile)[rule.selector.replace(/^:/, '')] = className
      rule.selector = "." + className
      console.log(this.scopes)
    } else {
      console.error(`Missing SOURCE to export scoped rule ${rule.selector}`)
    }
  }

  handleTrait(rule, trait) {
    console.log(rule, trait)
  }
}
