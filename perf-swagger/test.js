'use strict';
const Benchmark = require('benchmark');
const Joi = require('joi');
const Helper = require('../perf-swagger/utilities/helper.js');
const RoutesSingle = require('../perf-swagger/utilities/routes-single.js');
const RoutesStandard = require('../perf-swagger/utilities/routes-standard-test.js');
const RoutesComplex = require('../perf-swagger/utilities/routes-complex.js');
const RoutesComplexInline = require('../perf-swagger/utilities/routes-complex-inline.js');
const RoutesComplexLabel = require('../perf-swagger/utilities/routes-complex-inline.js');




Helper.createServer({}, RoutesSingle, (err, server) => {

    if(err){
        console.log(err)
    }


    var suite = new Benchmark.Suite;
    suite.add('Single Route', function () {
        server.inject({ method: 'GET', url: '/swagger.json' }, function (response) {
            //console.log(response.statusCode);
        });
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
       // console.log('Done.');
    })
    // run async
    .run({ 'async': true });
});


Helper.createServer({}, RoutesStandard, (err, server) => {

    if(err){
        console.log(err)
    }


    var suite = new Benchmark.Suite;
    suite.add('Standard Route', function () {
        server.inject({ method: 'GET', url: '/swagger.json' }, function (response) {
            //console.log(response.statusCode);
        });
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
       // console.log('Done.');
    })
    // run async
    .run({ 'async': true });
});


Helper.createServer({}, RoutesComplex, (err, server) => {

    if(err){
        console.log(err)
    }


    var suite = new Benchmark.Suite;
    suite.add('Complex Route', function () {
        server.inject({ method: 'GET', url: '/swagger.json' }, function (response) {
            //console.log(response.statusCode);
        });
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
       // console.log('Done.');
    })
    // run async
    .run({ 'async': true });
});


Helper.createServer({}, RoutesComplexInline, (err, server) => {

    if(err){
        console.log(err)
    }


    var suite = new Benchmark.Suite;
    suite.add('Complex Route Inline', function () {
        server.inject({ method: 'GET', url: '/swagger.json' }, function (response) {
            //console.log(response.statusCode);
        });
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
       // console.log('Done.');
    })
    // run async
    .run({ 'async': true });
});


Helper.createServer({}, RoutesComplexLabel, (err, server) => {

    if(err){
        console.log(err)
    }


    var suite = new Benchmark.Suite;
    suite.add('Complex Route Labels', function () {
        server.inject({ method: 'GET', url: '/swagger.json' }, function (response) {
            //console.log(response.statusCode);
        });
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
       // console.log('Done.');
    })
    // run async
    .run({ 'async': true });
});


