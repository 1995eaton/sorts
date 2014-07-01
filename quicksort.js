// http://en.wikipedia.org/wiki/Quicksort
// Best:     O(n*log(n))
// Average:  O(n*log(n))
// Worst:    O(n^2)
// Memory:   O(n) - O(log(n))
// Stable:   Yes, unless in-place

quickSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  var i, l, pivot,
      a = array.slice(0),
      less    = [],
      equal   = [],
      greater = [];
  pivot = a[Math.floor(a.length / 2)];
  for (i = 0, l = a.length; i < l; i++) {
    if (a[i] < pivot) {
      less.push(a[i]);
    } else if (a[i] > pivot) {
      greater.push(a[i]);
    } else {
      equal.push(a[i]);
    }
  }
  return quickSort(less)
    .concat(equal, quickSort(greater));
};
