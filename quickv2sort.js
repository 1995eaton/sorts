// http://en.wikipedia.org/wiki/Quicksort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n^2)
// Memory:   O(n) - O(log(n))
// Stable:   Yes, unless in-place

quickv2Sort = function(array) {
  var sorted = array.slice(0);
  return (function sort(left, right) {
    if (left < right) {
      var pivot = sorted[(left + right) >> 1];
      var lp = left,
          rp = right;
      while (lp < rp) {
        while (sorted[lp] < pivot) {
          lp++;
        }
        while (sorted[rp] > pivot) {
          rp--;
        }
        if (lp <= rp) {
          var temp = sorted[lp];
          sorted[lp] = sorted[rp];
          sorted[rp] = temp;
          lp++;
          rp--;
        }
      }
      sort(left, rp);
      sort(lp, right);
    }
    return sorted;
  })(0, sorted.length - 1);
};
