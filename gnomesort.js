// http://en.wikipedia.org/wiki/Gnome_sort
// Best:     O(n)
// Average:  O(n^2)
// Worst:    O(n^2)
// Memory:   1
// Stable:   Yes

gnomeSort = function(array) {
  var a = array.slice(0),
      pos = 1;
  while (pos < a.length) {
    if (a[pos] >= a[pos - 1]) {
      pos++;
    } else {
      a[pos] = a[pos - 1] + (a[pos - 1] = a[pos], 0);
      if (pos > 1) {
        pos--;
      }
    }
  }
  return a;
};
