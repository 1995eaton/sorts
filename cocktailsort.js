var cocktailSort = function(a) {
  var i,
      isSorted = true,
      len = a.length;
  if (len < 2) {
    return a;
  }
  for (i = 0; i < len - 1; i++) {
    if (a[i] > a[i + 1]) {
      a[i] = a[i + 1] + (a[i + 1] = a[i], 0);
      isSorted = false;
    }
  }
  if (isSorted === true) {
    return a;
  }
  i--;
  isSorted = true;
  while (i-- !== -1) {
    if (a[i] > a[i + 1]) {
      a[i] = a[i + 1] + (a[i + 1] = a[i], 0);
      isSorted = false;
    }
  }
  return isSorted === true ? a : cocktailSort(a);
};
