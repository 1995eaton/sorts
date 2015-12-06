// http://en.wikipedia.org/wiki/Merge_sort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n*log(n))
// Memory:   n (worst case)
// Stable:   Yes

mergeSort = (function() {
  function merge(left, right) {
    var result = [];
    for (var i = 0, j = 0; i < left.length && j < right.length;) {
      if (left[i] < right[j])
        result.push(left[i++]);
      else
        result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  return function(array) {
    if (array.length <= 1) return array;
    var midpoint = array.length >> 1;
    return merge(mergeSort(array.slice(0, midpoint)),
                 mergeSort(array.slice(midpoint)));
  };
})();
