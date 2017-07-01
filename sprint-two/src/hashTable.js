

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k, v]]);
  } else {
    var pairs = this._storage.get(index);
    for (var i = 0; i < pairs.length; i++) {
      if (pairs[i][0] === k) {
        pairs[i][1] = v;
      } else {
        pairs.push([k, v]); 
      }
    } 
    this._storage.set(index, pairs);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(index);

  for (var i = 0; i < pairs.length; i++) {
    var key = pairs[i][0];
    var value = pairs[i][1];
    if (k === key) {
      return value;
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var pairs = this._storage.get(index);
  for (var i = 0; i < pairs.length; i++) {
    if (pairs[i][0] === k) {
      pairs[i][0] = undefined;
      pairs[i][1] = undefined;
    }
  }
  this._storage.set(index, pairs);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


