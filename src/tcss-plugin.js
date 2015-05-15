import postcss from 'postcss'
import Rule from 'postcss/lib/rule'

export default class TCSS {
  constructor() {
    this.traits = {}
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
    css.each(rule => {
      if (rule.type == "comment" && rule.text.startsWith("SOURCE")) {
        this.handleSourceComment(rule)
      } else if (rule.type == "rule" && rule.selector.startsWith(":")) {
        this.handlePlaceholder(rule)
      } else if (rule.type == "atrule" && rule.name == "define-trait") {
        this.defineTrait(rule)
      } else {
        console.log(rule)
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
      this.key = rule.selector.replace(/^:/, '')
      rule.eachInside(child => {
        if (child.type == "rule" && child.selector == "traits") {
          this.handleTraits(child)
        }
      })
      if (rule.nodes.length > 0) {
        let className = toClassName([this.currentFile, rule.selector].join())
        this.addClass(className)
        rule.selector = "." + className
      } else {
        rule.removeSelf()
      }
    } else {
      console.error(`Missing SOURCE to export scoped rule ${rule.selector}`)
    }
  }

  handleTraits(traitNode) {
    console.log(traitNode)
    if (this.key) {
      traitNode.each(rule => {
        let traitName = rule.prop;
        this.addClass(`t-${ traitName}`)
        if (rule.value) rule.value.split(" ").forEach(v => {
          this.addClass(`t-${traitName}:${v}`)
        })
      })
      traitNode.removeSelf()
    } else {
      console.error(`Traits can only be included within placeholders!`)
    }
  }

  addClass(newClass) {
    let scope = this.scopes.get(this.currentFile)
    scope[this.key] = scope[this.key] ? `${scope[this.key]} ${newClass}` : newClass
  }

  defineTrait(rule) {
    this.traits[rule.params] = []
    rule.parent.insertBefore(rule, new Rule({selector: `.t-${rule.params}`, nodes: rule.nodes}))
    rule.eachRule(child => {
      if (!child.nodes) return;
      this.traits[rule.params].push(child.selector)
      child.selector = `.t-${rule.params}\\:${child.selector}`
      rule.remove(child)
      rule.parent.insertBefore(rule, child)
    })
    rule.removeSelf()
  }
}
