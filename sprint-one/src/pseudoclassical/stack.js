var Stack = function() {
  this.storage = {};
  this.sizeCount = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

Stack.prototype.pop = function() {
  this.sizeCount--;
  return this.storage[this.sizeCount];
};

Stack.prototype.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
  }
  return this.sizeCount;
};

