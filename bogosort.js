// http://en.wikipedia.org/wiki/Bogosort
// Best:     O(n)
// Average:  O(n*n!)
// Worst:    O(inf)
// Memory:   1
// Stable:   Yeah right

bogoSort = function(array) {
  var len = array.length;
  if (len < 2) {
    return array;
  }
  var i, _checkSort,
      r = [],
      a = array.slice(0);
  _checkSort = function() {
    for (i = 0; i < len - 1; i++) {
      if (a[i] > a[i + 1]) {
        return false;
      }
    }
    return true;
  };
  if (_checkSort() === true) {
    return a;
  }
  while (len !== 0) {
    r.push(a.splice(Math.floor(Math.random() * len--), 1)[0]);
  }
  return bogoSort(r);
};
