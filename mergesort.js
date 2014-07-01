// http://en.wikipedia.org/wiki/Merge_sort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n*log(n))
// Memory:   n (worst case)
// Stable:   Yes

var mergeSort = function(a) {
  if (a.length < 2) {
    return a;
  }
  var _merge = function(left, right) {
    var result = [];
    while (left.length > 0 || right.length > 0) {
      if (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else if (left.length > 0) {
        result.push(left.shift());
      } else if (right.length > 0) {
        result.push(right.shift());
      }
    }
    return result;
  };
  var mid = Math.floor(a.length / 2);
  return _merge( mergeSort( a.slice(0, mid )),
                 mergeSort( a.slice(mid)   ) );
};
