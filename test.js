#!/usr/bin/env node

var sorts = [
  'radix',
  'quickv2',
  'mergev2',
  'heap',
  // 'quick',
  // 'merge',
  // 'strand',
  // 'comb',
  // 'insertion',
  // 'selection',
  // 'gnome',
  // 'cocktail',
  // 'bubble',
  // 'bogo',
];

var args = process.argv.slice(2);

(function() {
  var stemp = args.slice(0).filter(function(e) {
    return e % 1 !== 0;
  });

  if (stemp.length !== 0) {
    sorts = stemp.map(function(e) {
      return e.replace(/(sort)?\.js/, '');
    });
    for (var i = 0; i < stemp.length; i++) {
      args.splice(args.indexOf(stemp[i]), 1);
    }
  }
})();

(function loadSorts() {
  for (var i = 0; i < sorts.length; i++) {
    require('./' + sorts[i] + 'sort.js');
  }
})();

function compare(a, b) {
  for (var i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function genRandom(n, m) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(Math.floor(Math.random() * (m || 100)));
  }
  return a;
}

function numSort(a) {
  return a.slice(0).sort(function(b, c) {
    return b - c;
  });
}

var n = +args[0] || 10000,
    m = +args[1] || (n * 5);
var array = genRandom(n, m);

var time = new Date().getTime();
var sorted = numSort(array);
console.log('normal sort: ' + ((new Date().getTime() - time) / 1000).toString() + 's');

for (var i = 0; i < sorts.length; i++) {
  time = new Date().getTime();
  try {
    if (compare(sorted, global[sorts[i] + 'Sort'](array)) === false) {
      console.log('Invalid sort in ' + sorts[i]);
    }
    console.log(sorts[i] + ': ' + ((new Date().getTime() - time) / 1000).toString() + 's');
  } catch (e) {
    console.log(sorts[i] + ': ' + e.name);
  }
}
