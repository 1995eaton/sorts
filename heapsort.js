// http://en.wikipedia.org/wiki/Heapsort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n*log(n))
// Memory:   1
// Stable:   No

heapSort = function(array) {

  var _siftDown,
      a = array.slice(0),
      len = array.length,
      start = Math.floor(len / 2),
      end = len - 1;

  _siftDown = function(a, start, end) {
    var child, root = start;
    while (root * 2 + 1 <= end) {
      child = root * 2 + 1;
      if (child + 1 <= end && a[child] < a[child + 1]) {
        child++;
      }
      if (a[root] < a[child]) {
        a[root] = a[child] + (a[child] = a[root], 0);
        root = child;
      } else {
        return;
      }
    }
  };

  while (start >= 0) {
    _siftDown(a, start--, len - 1);
  }
  while (end > 0) {
    a[end] = a[0] + (a[0] = a[end--], 0);
    _siftDown(a, 0, end);
  }

  return a;

};
