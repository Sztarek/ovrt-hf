import  CompositeComponent from "./CompositeComponent"
import { generateTabs } from "../helpers"

export default class Leaf extends CompositeComponent {
  constructor() {
    super('leaf') 
    this.text = ''
  }
  // Generate XML for the floppy disk
  generateXML(tabs = 0) {
    return `${generateTabs(tabs)}<${this.name}>\n${generateTabs(tabs + 1) + this.text}\n${generateTabs(tabs)}</${this.name}>\n` 
  }

  // Set text of leaf
  setText (text) {
    this.text = text
    return this
  }
}