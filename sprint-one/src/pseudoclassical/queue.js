var Queue = function() {
  this.storage = {};
  this.sizeCount = 0;
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.sizeCount++;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  var item = this.storage[this.head];
  this.sizeCount--;
  this.head++;
  return item;
};

Queue.prototype.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
    this.head = 0;
    this.tail = 0;
  }
  return this.sizeCount;
};


