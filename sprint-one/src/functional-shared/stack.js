var Stack = function() {
  
  var newStack = {};
  newStack.storage = {};
  newStack.sizeCount = 0;
  
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

stackMethods.pop = function() {
  this.sizeCount--;
  return this.storage[this.sizeCount];
};

stackMethods.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
  }
  return this.sizeCount;
};


