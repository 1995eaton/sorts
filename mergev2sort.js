mergev2Sort = (function() {
  var merge = function(a, b, left, right, end) {
    for (var i = left, j = right, k = left; k < end; k++) {
      if (i < right && (j >= end || a[i] <= a[j]))
        b[k] = a[i++];
      else
        b[k] = a[j++];
    }
  };

  var impl = function(a, b, n) {
    for (var width = 1; width < n; width <<= 1) {
      for (var i = 0; i < n; i = i + (width << 1)) {
        merge(a, b, i, Math.min(i + width, n), Math.min(i + (width << 1), n));
      }
      for (i = 0; i < n; i++)
        a[i] = b[i];
    }
  };

  return function(array) {
    var a = array.slice(0),
        b = a.slice(0);
    impl(a, b, a.length);
    return a;
  };
})();
