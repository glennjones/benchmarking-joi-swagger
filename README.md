# benchmark-joi-swagger

This is a project to look at some simple performance metrics of joi and hapi-swagger. Its built with benchmark.js and microtime.


Install
```bash
$ git clone https://github.com/glennjones/benchmark-joi-swagger
$ cd benchmark-joi-swagger
$ npm install
```

To run performance tests
```bash
$ node perf-joi/test.js
$ node pref-swagger/test.js
```

### joi performance tests
NoStringslabels x 10,473 ops/sec ±1.57% (84 runs sampled)
NoArraysLabels x 3,122 ops/sec ±1.53% (85 runs sampled)
StringsLabels x 5,760 ops/sec ±1.65% (86 runs sampled)
ArraysLabels x 2,152 ops/sec ±1.56% (80 runs sampled)
StringsMeta x 5,751 ops/sec ±1.50% (82 runs sampled)
ArraysMeta x 2,153 ops/sec ±1.46% (81 runs sampled)
StringsComplexLabeling x 1,947 ops/sec ±1.45% (82 runs sampled)
ArraysComplexLabeling x 1,463 ops/sec ±1.41% (84 runs sampled)
Large objects x 164 ops/sec ±3.51% (78 runs sampled)


### hapi-swagger performance tests
Complex Route x 1.71 ops/sec ±3.05% (9 runs sampled)
Complex Route Inline x 1.76 ops/sec ±1.36% (9 runs sampled)
Complex Route Labels x 1.77 ops/sec ±1.63% (9 runs sampled)
Single Route x 1,191 ops/sec ±4.41% (21 runs sampled)
Standard Route x 89.15 ops/sec ±3.36% (65 runs sampled)


## Issues
If you find any issue please file here on github and I will try and fix them.


