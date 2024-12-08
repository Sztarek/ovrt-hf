# Dynamic XML Builder with Composite and Fluid Interface Pattern

This project implements a Dynamic XML Builder using the Composite Pattern in React. It allows users to create, modify, and remove hierarchical data structures represented as XML elements. The system supports both composite nodes (which can have children) and leaf nodes (which are terminal nodes with text content).


`Node v18.17.1` was used for this project

## Available Scripts
`npm i` to install libraries

`npm run start` to start, it should open on localhost:3000


## Features

- Create and manage hierarchical structures: Easily add and organize composite and leaf nodes in a tree-like structure.
- Interactive UI: Add, edit, and remove nodes with a simple and intuitive interface.
- Dynamic XML generation: As users modify the structure, an XML representation is dynamically generated and displayed.
- Fluid Interface: A fluid, chaining interface is used to simplify node addition and manipulation.

## How it works

- Composite Nodes: These nodes can have child nodes, and they can be further extended by adding other composite or leaf nodes.
- Leaf Nodes: These terminal nodes hold text content and do not have any children.
- XML Generation: The structure is converted into XML format, which is displayed in real time.

## Usage

- Add Leaf: Add a leaf node with a name and text content.
- Add Composite: Add a composite node (a node that can have children).
- Remove Node: Remove a node and all it's children from the hierarchy.
- Edit Node: Modify the name and text (if leaf node) content of a node.
- Remove All Children: Clear all child nodes of a composite node.

This project demonstrates the use of the Composite Pattern for managing complex tree structures and dynamically generating XML.


