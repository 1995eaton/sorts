// http://en.wikipedia.org/wiki/Strand_sort
// Best:     O(n)
// Average:  O(n^2)
// Worst:    O(n^2)
// Memory:   n
// Stable:   Yes

strandSort = function(array) {
  var highest, newBin, lowBin,
      i = 0,
      a = array.slice(0),
      len = a.length,
      sortedBins = [],
      sorted = [];
  while (a.length !== 0) {
    highest = Number.NEGATIVE_INFINITY;
    newBin = [];
    i = 0;
    while (i < a.length) {
      if (a[i] >= highest) {
        newBin.push(highest = a.splice(i, 1)[0]);
      } else {
        i++;
      }
    }
    sortedBins.push(newBin);
  }
  while (sorted.length < len) {
    lowBin = 0;
    for (i = 0; i < sortedBins.length; i++) {
      if (sortedBins[i][0] < sortedBins[lowBin][0]) {
        lowBin = i;
      }
    }
    sorted.push(sortedBins[lowBin].shift());
    if (sortedBins[lowBin].length === 0) {
      sortedBins.splice(lowBin, 1);
    }
  }
  return sorted;
};
