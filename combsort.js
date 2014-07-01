// http://en.wikipedia.org/wiki/Comb_sort
// Best:     O(n)
// Average:  O(n*log(n))
// Worst:    O(n^2)
// Memory:   1
// Stable:   No

combSort = function(array) {
  var a = array.slice(0),
      len = a.length,
      gap = len,
      shrink = 1.3,
      swapped = true;
  while (gap !== 1 || swapped === true) {
    if (gap > 1) {
      gap = ~~(gap / shrink);
    }
    swapped = false;
    for (var i = 0; gap + i < len; i++) {
      if (a[i] > a[i + gap]) {
        a[i] = a[i + gap] + (a[i + gap] = a[i], 0);
        swapped = true;
      }
    }
  }
  return a;
};
