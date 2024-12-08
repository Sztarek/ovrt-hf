export default class CompositeComponent {
  constructor(type) {
    this.name = '' 
    this.children = [] 
    this.type = type
  }

  // Accessor for name
  getName() {
    return this.name 
  }

  // Mutator for name
  setName(name) {
    this.name = name 
    return this
  }

  // Add child component
  add(_) {
    throw new Error('add() not implemented') 
  }

  // Remove child component
  remove(_) {
    throw new Error('remove() not implemented') 
  }

  // Generate XML for the node (abstract, to be implemented by concrete classes)
  generateXML() {
    return '' 
  }
}