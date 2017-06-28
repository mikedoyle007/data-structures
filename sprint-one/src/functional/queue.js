var Queue = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
    size++;

  };

  someInstance.dequeue = function() {
    var item = storage[head];
    head++;
    size--;
    return item;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
      head = 0;
      tail = 0;
    }
    return size;
  };

  return someInstance;
};
