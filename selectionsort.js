// http://en.wikipedia.org/wiki/Selection_sort
// Best:     O(n^2)
// Average:  O(n^2)
// Worst:    O(n^2)
// Memory:   1
// Stable:   No

selectionSort = function(array) {
  var a = array.slice(0);
  var i, j, len, min;
  for (j = 0, len = a.length; j < len - 1; j++) {
    for (i = j + 1, min = j; i < len; i++) {
      if (a[i] < a[min]) {
        min = i;
      }
    }
    if (min !== j) {
      a[j] = a[min] + (a[min] = a[j], 0);
    }
  }
  return a;
};
