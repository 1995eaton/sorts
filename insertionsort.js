// http://en.wikipedia.org/wiki/Insertion_sort
// Best:     O(n)
// Average:  O(n^2)
// Worst:    O(n^2)
// Memory:   1
// Stable:   Yes

insertionSort = function(array) {
  var i, j,
      a = array.slice(0);
  for (i = 0, l = a.length; i < l; i++) {
    j = i;
    while (j > 0 && a[j - 1] > a[j]) {
      a[j] = a[j - 1] + (a[j - 1] = a[j], 0);
      j--;
    }
  }
  return a;
};
