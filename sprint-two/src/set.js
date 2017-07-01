var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// Time complexity = Constant
setPrototype.add = function(item) { 
  this._storage[item] = item;
};

// Time complexity = Constant
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item) ? true : false;
};

// Time complexity = Constant
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
