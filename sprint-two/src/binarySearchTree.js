var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);

    }
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var currentNode = node;

  // start at current node passed in
  // is currentNode === value ?
  // return true
  // if value < currentNode
  // go left
  // recurse(newNode, value)
  // else
  // go right
  // recurse(newNode, value)

};

BinarySearchTree.prototype.depthFirstLog = function() {};
/*
 * Complexity: What is the time complexity of the above functions?
 */
