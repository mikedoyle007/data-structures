var Stack = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;

  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    return storage[size];
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
