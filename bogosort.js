var bogoSort = function(a) {
  var len, i,
      r = [],
      isSorted = true;
  if ((len = a.length) < 2) {
    return a;
  }
  for (i = 0; i < len - 1; i++) {
    if (a[i] > a[i + 1]) {
      isSorted = false;
    }
  }
  if (isSorted) {
    return a;
  }
  while (a.length !== 0) {
    r.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
  }
  return bogoSort(r);
};
