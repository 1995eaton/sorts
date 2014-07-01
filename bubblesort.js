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
