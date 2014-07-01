var quickSort = function(a) {
  if (a.length < 2) {
    return a;
  }
  var i, l, pivot,
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
var a = [0, 1, 0, -1];
console.log(quickSort(a));
