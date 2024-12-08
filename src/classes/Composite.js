import CompositeComponent from './CompositeComponent'
import { generateTabs } from "../helpers"

export default class Composite extends CompositeComponent {
  constructor() {
    super('composite') 
  }

  // Add a child node
  add(child) {
    this.children.push(child) 
    return this
  }

  // Remove a child node
  remove(child) {
    this.children = this.children.filter(e => e !== child) 
    return this
  }

  // Generate XML for the composite, including all children
  generateXML(tabs = 0) {
    const childrenXML = this.children.map(child => child.generateXML(tabs + 1)).join('')
    return `${generateTabs(tabs)}<${this.name}>\n${childrenXML} ${generateTabs(tabs)}</${this.name}>\n`
  }
}
