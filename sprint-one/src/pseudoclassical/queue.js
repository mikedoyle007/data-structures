var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  var item = this.storage[this.head];
  this.head++;
  return item;
};

Queue.prototype.size = function() {
  if ((this.tail - this.head) < 0) {
    this.head = 0;
    this.tail = 0;
  }
  return this.tail - this.head;
};


