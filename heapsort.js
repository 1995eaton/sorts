// http://en.wikipedia.org/wiki/Heapsort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n*log(n))
// Memory:   1
// Stable:   No

var heapSort = function(a) {
  var _sift = function(a, start, end) {
    var child, swap, r2,
        root = start;
    while ((r2 = root * 2) + 1 <= end) {
      child = r2 + 1;
      swap = root;
      if (a[swap] < a[child]) {
        swap = child;
      }
      if (child + 1 <= end && a[swap] < a[child + 1]) {
        swap = child + 1;
      }
      if (swap !== root) {
        a[root] = a[swap] + (a[swap] = a[root], 0);
        root = swap;
      } else {
        return;
      }
    }
  };
  var i, len = a.length;
  for (i = ~~((len / 2) - 1); i !== -1; i--) {
    _sift(a, i, len);
  }
  for (i = len - 1; i !== 0; i--) {
    a[0] = a[i] + (a[i] = a[0], 0);
    _sift(a, 0, i - 1);
  }
  return a;
};
