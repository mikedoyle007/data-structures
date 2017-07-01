var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

// Time complexity = Constant
treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  this.children.push(childTree);
};

// Time complexity = Linear
treeMethods.contains = function(target) {
  var result = false;

  var lookForTarget = function(node, target) {
    node = node || start;
    if (node.value === target) {
      result = true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        lookForTarget(node.children[i], target);
      }
    }
  };

  lookForTarget(this, target);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
