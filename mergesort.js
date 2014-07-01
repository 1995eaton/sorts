// http://en.wikipedia.org/wiki/Merge_sort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n*log(n))
// Memory:   n (worst case)
// Stable:   Yes

mergeSort = function(array) {
  var len = array.length;
  if (len < 2) {
    return array;
  }
  var _merge,
      a = array.slice(0),
      mid = Math.floor(len / 2);

  _merge = function(left, right) {
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

  return _merge( mergeSort( a.slice( 0, mid )),
                 mergeSort( a.slice( mid    )) );
};
