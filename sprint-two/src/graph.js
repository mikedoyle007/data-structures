

// Instantiate a new graph
var Graph = function() {
  this.graphContainer = {};
};

// Time complexity = Constant
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphContainer[node] = {};
};

// Time complexity = Constant 
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.graphContainer.hasOwnProperty(node));
};

// Time complexity = Constant
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.graphContainer.hasOwnProperty(node)) {
    for (var edge in this.graphContainer[node]) {
      var edgeNode = edge.slice(5);
      if (this.graphContainer[edgeNode].hasOwnProperty('edge ' + node)) {
        delete this.graphContainer[edgeNode]['edge ' + node];
      }
    }
    delete this.graphContainer[node];
  }
};

// Time complexity = Constant
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graphContainer[fromNode].hasOwnProperty('edge ' + toNode)) {
    if (this.graphContainer[toNode].hasOwnProperty('edge ' + fromNode)) {
      return true;
    }
  }
  return false;
};

// Time complexity = Constant
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.graphContainer[fromNode] && this.graphContainer[toNode]) {
    this.graphContainer[fromNode]['edge ' + toNode] = this.graphContainer[toNode];
    this.graphContainer[toNode]['edge ' + fromNode] = this.graphContainer[fromNode]; 
  }
};

// Time complexity = Constant
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.graphContainer[fromNode].hasOwnProperty('edge ' + toNode)) {
    if (this.graphContainer[toNode].hasOwnProperty('edge ' + fromNode)) {
      // remove edges
      delete this.graphContainer[toNode]['edge ' + fromNode];
      delete this.graphContainer[fromNode]['edge ' + toNode];
    }
  }
};

// Time complexity = Linear
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graphContainer) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


