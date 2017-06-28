var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add to end of line
    storage[tail] = value;
    // increment the tail indicator
    tail++;
    // increment size
    size++;

  };

  someInstance.dequeue = function() {
    // remove from front of line
    var item = storage[head];
    // increment head
    head++;
    // decrement size
    size--;
    // return item that was dequeued
    return item;
  };

  someInstance.size = function() {
  };

  return someInstance;
};
