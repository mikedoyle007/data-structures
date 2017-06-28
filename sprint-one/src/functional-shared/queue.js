var Queue = function() {

  var newQueue = {};
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  var item = this.storage[this.head];
  this.head++;
  return item;
};

queueMethods.size = function() {
  if ((this.tail - this.head) < 0) {
    this.head = 0;
    this.tail = 0;
  }
  return this.tail - this.head;
};


