var Queue = function() {
  var someInstance = {};

  var storage = {};
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var item = storage[head];
    head++;
    return item;
  };

  someInstance.size = function() {
    if ((tail - head) < 0) {
      head = 0;
      tail = 0;
    }
    return tail - head;
  };

  return someInstance;
};
