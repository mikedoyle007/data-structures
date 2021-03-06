var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity = Constant
  list.addToTail = function(value) {
    if (value !== undefined) {
      var newNode = Node(value);
      if (list.head === null) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        var oldTail = list.tail;
        list.tail.next = newNode;
        list.tail = newNode;
      }
    }
  };

  // Time complexity = Constant
  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  // Time complexity = Linear
  list.contains = function(target) {
    var currentVal = list.head;
    while (currentVal !== null) {
      if (currentVal.value === target) {
        return true;
      } else {
        currentVal = currentVal.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
