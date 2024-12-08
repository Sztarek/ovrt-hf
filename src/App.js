import React, { Component } from 'react';

// Import the Composite and Leaf classes
import Composite from './classes/Composite';
import Leaf from './classes/Leaf';

class App extends Component {
  constructor(props) {
    super(props); // Initialize the parent class (Component)
    
    // Initial state containing a root node of type Composite with some initial children
    this.state = {
      root: new Composite().setName('root') // Create the root Composite node
        .add(
          (new Composite().setName('SubComposite 1'))
            .add((new Leaf()).setText('Leaf 1 Text').setName('Leaf1'))
        )
        .add((new Leaf()).setText('Leaf 2 Text').setName('Leaf2'))
    };
  }

  // Function to add a new Composite node to the given parent node
  addComposite = (parentNode) => {
    const name = prompt('Enter name for the new node:'); // Prompt user for a new name
    const newNode = new Composite().setName(name); // Create a new Composite with the provided name
    parentNode.add(newNode); // Add the new Composite to the parent node
    this.setState({
      root: this.state.root // Update state to trigger re-render
    });
  };

  // Function to add a new Leaf node to the given parent node
  addLeaf = (parentNode) => {
    const name = prompt('Enter name for the new node:'); // Prompt user for a new name
    const text = prompt('Enter the text for the node'); // Prompt user for the text of the leaf node
    const newNode = new Leaf().setName(name).setText(text); // Create a new Leaf with the provided name and text

    parentNode.add(newNode); // Add the new Leaf to the parent node
    this.setState({
      root: this.state.root // Update state to trigger re-render
    });
  };

  // Function to remove all children from a node recursively
  removeAllChildren = (node) => {
    if (!node.children.length) { // Base case: If no children, just return
      this.setState({
        root: this.state.root // Update state to trigger re-render
      });
      return;
    }
    // Recursively remove children from the node
    return this.removeAllChildren(node.remove(node.children[0]));
  };

  // Function to edit the name and text of a node
  edit = (node) => {
    const name = node.name; // Store the current name
    let text, newText;

    // Prompt the user to enter a new name
    const newName = prompt('Enter name for the new node:', name);

    if (node.type === 'leaf') { // If it's a leaf node, also allow text editing
      text = node.text;
      newText = prompt('Enter the text for the node', text);
    }

    // Update the node's name and text (if applicable)
    node.setName(newName).setText?.(newText);

    // Update state to trigger re-render
    this.setState({
      root: this.state.root
    });
  };

  // Function to remove a specific node from its parent
  removeNode = (parentNode, nodeToRemove) => {
    parentNode.remove(nodeToRemove); // Remove the node from the parent
    this.setState({ root: this.state.root }); // Update state to trigger re-render
  };

  // Function to generate the XML string from the current tree structure
  generateXML = () => {
    return this.state.root.generateXML(); // Call the generateXML method of the root node
  };

  // Recursive function to render each node and its children
  renderNode = (node, parentNode) => {
    return (
      <div key={node.getName()} style={{ marginLeft: 20 }}> {/* Style with indentation */}
        <div>
          <strong>{node.getName()}</strong> {/* Display the node name */}
          {/* Buttons for adding leaf/composite, removing nodes, editing nodes */}
          <button onClick={() => this.addLeaf(node)} disabled={node.type === 'leaf'}>Add Leaf</button>
          <button onClick={() => this.addComposite(node)} disabled={node.type === 'leaf'}>Add Composite</button>
          <button onClick={() => this.removeAllChildren(node)} disabled={node.type === 'leaf'}>Remove all children</button>
          <button onClick={() => this.removeNode(parentNode, node)}>Remove</button>
          <button onClick={() => this.edit(node)}>Edit</button>
        </div>
        {/* Render child nodes if present */}
        {node.children && node.children.map(child => this.renderNode(child, node))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>XML Builder</h1> {/* Header for the page */}
        {this.renderNode(this.state.root)} {/* Render the root node and its children recursively */}
        <h2>Generated XML:</h2> {/* Section for displaying generated XML */}
        <pre>{this.generateXML()}</pre> {/* Display the XML in preformatted text */}
      </div>
    );
  }
}

export default App; // Export the App component to use it in other files