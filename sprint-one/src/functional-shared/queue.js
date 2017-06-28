var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  var storage = {};
  var size = 0;
  var head = 0;
  var tail = 0;
  _.extend(instance, instance.queueMethods);

  return instance;

};

// var queueMethods = {};
instance.queueMethods = {};

instance.queueMethods.enqueue = function(value) {};

instance.queueMethods.dequeue = function(value) {};

instance.queueMethods.size = function(value) {};


