radixSort = function(array) {
  array = array.slice();
  var counts = [], offsets = [];
  for (var i = 0; i < 0x100; i++)
    counts.push(0);
  offsets = counts.slice();
  for (var shift = 0, next = array.slice(); shift < 32; shift += 2) {
    for (i = 0; i < 0x100; i++)
      counts[i] = 0;
    for (i = 0; i < array.length; i++)
      counts[(array[i] >> shift) & 0xFF]++;
    for (var m = (i = 0); i < 0x100; m += counts[i++])
      offsets[i] = m;
    for (i = 0; i < array.length; i++)
      next[offsets[(array[i] >> shift) & 0xFF]++] = array[i];
    var old = array;
    array = next;
    next = old;
  }
  return array;
};
