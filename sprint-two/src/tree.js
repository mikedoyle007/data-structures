var Tree = function(value) {
  var newTree = {};
  // var newTree = Object.create(treeMethods);
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
