// http://en.wikipedia.org/wiki/Bubble_sort
// Best:     O(n)
// Average:  O(n^2)
// Worst:    O(n^2)
// Memory:   1
// Stable:   Yes

var bubbleSort = function(a) {
  var isSorted = true;
  for (var i = 0, l = a.length - 1; i < l; i++) {
    if (a[i] > a[i + 1]) {
      a[i] = a[i + 1] + (a[i + 1] = a[i], 0);
      isSorted = false;
    }
  }
  return isSorted ? a : bubbleSort(a);
};
