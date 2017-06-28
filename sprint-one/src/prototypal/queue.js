var Queue = function() {
  var newQueue = Object.create(queueMethods);

  newQueue.sizeCount = 0;
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.sizeCount++;
  this.tail++;
};

queueMethods.dequeue = function() {
  var item = this.storage[this.head];
  this.head++;
  this.sizeCount--;
  return item;
};

queueMethods.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
  }
  return this.sizeCount;
};

