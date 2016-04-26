'use strict';
const Benchmark = require('benchmark');
const Joi = require('joi');


var suite = new Benchmark.Suite;

// add tests
suite.add('FluentInterface', function () {
    const schema = Joi.alternatives().try([
        Joi.string().valid('key'),
        Joi.number().valid(5),
        Joi.object().keys({
            a: Joi.boolean().valid(true),
            b: Joi.alternatives().try([
                Joi.string().regex(/^a/),
                Joi.string().valid('boom')
            ])
        })
    ]);
})
    .add('Compile', function () {
        const definition = ['key', 5, { a: true, b: [/^a/, 'boom'] }];
        const schema = Joi.compile(definition);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('abort', function (event) {
        console.log(JSON.stringify(event));
    })
    .on('error', function (event) {
        console.log(JSON.stringify(event));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });