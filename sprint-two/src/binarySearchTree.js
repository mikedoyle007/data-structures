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
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    }
  } else {
    if (this.left !== null) {
      return this.left.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
