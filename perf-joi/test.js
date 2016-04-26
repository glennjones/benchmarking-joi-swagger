'use strict';
const Benchmark = require('benchmark');
const Joi = require('joi');


var suite = new Benchmark.Suite;

// add tests
suite.add('NoStringslabels', function () {
        const schema = Joi.object({
            a: Joi.string(),
            b: Joi.string(),
            c: Joi.string(),
            d: Joi.string(),
            e: Joi.string()
        });
    })
    .add('NoArraysLabels', function () {
        const schema = Joi.object({
            a: Joi.array().items({x: Joi.string()}),
            b: Joi.array().items({x: Joi.string()}),
            c: Joi.array().items({x: Joi.string()}),
            d: Joi.array().items({x: Joi.string()}),
            e: Joi.array().items({x: Joi.string()})
        })
    })
    .add('StringsLabels', function () {
        const schema = Joi.object({
            a: Joi.string().label('a'),
            b: Joi.string().label('b'),
            c: Joi.string().label('c'),
            d: Joi.string().label('d'),
            e: Joi.string().label('e')
        }).label('List labels');
    })
    .add('ArraysLabels', function () {
        const schema = Joi.object({
            a: Joi.array().items({x: Joi.string().label('x')}).label('a'),
            b: Joi.array().items({x: Joi.string().label('x')}).label('b'),
            c: Joi.array().items({x: Joi.string().label('x')}).label('c'),
            d: Joi.array().items({x: Joi.string().label('x')}).label('d'),
            e: Joi.array().items({x: Joi.string().label('x')}).label('e')
        }).label('List labels');
    })
    .add('StringsMeta', function () {
        const schema = Joi.object({
            a: Joi.string().meta({'a': 'x'}),
            b: Joi.string().meta({'b': 'x'}),
            c: Joi.string().meta({'c': 'x'}),
            d: Joi.string().meta({'d': 'x'}),
            e: Joi.string().meta({'e': 'x'})
        }).meta({'y': 'x'});
    })
    .add('ArraysMeta', function () {
        const schema = Joi.object({
            a: Joi.array().items({x: Joi.string().meta({'y': 'x'})}).meta({'a': 'x'}),
            b: Joi.array().items({x: Joi.string().meta({'y': 'x'})}).meta({'b': 'x'}),
            c: Joi.array().items({x: Joi.string().meta({'y': 'x'})}).meta({'c': 'x'}),
            d: Joi.array().items({x: Joi.string().meta({'y': 'x'})}).meta({'d': 'x'}),
            e: Joi.array().items({x: Joi.string().meta({'y': 'x'})}).meta({'e': 'x'})
        }).meta({'y': 'x'});
    })
    .add('StringsComplexLabeling', function () {
        const schema = Joi.object({
            a: Joi.string().label('a').description('a').tags(['a']).notes(['a']).example('a'),
            b: Joi.string().label('b').description('b').tags(['b']).notes(['b']).example('b'),
            c: Joi.string().label('c').description('c').tags(['c']).notes(['c']).example('c'),
            d: Joi.string().label('d').description('d').tags(['d']).notes(['d']).example('d'),
            e: Joi.string().label('e').description('e').tags(['e']).notes(['e']).example('e')
        }).label('List labels').description('x').tags(['x']).notes(['x']);
    })
    .add('ArraysComplexLabeling', function () {
        const schema = Joi.object({
            a: Joi.array().items({x: Joi.string().label('x')}).label('a').description('a').tags(['a']).notes(['a']),
            b: Joi.array().items({x: Joi.string().label('x')}).label('b').description('b').tags(['b']).notes(['b']),
            c: Joi.array().items({x: Joi.string().label('x')}).label('c').description('c').tags(['c']).notes(['c']),
            d: Joi.array().items({x: Joi.string().label('x')}).label('d').description('d').tags(['d']).notes(['d']),
            e: Joi.array().items({x: Joi.string().label('x')}).label('e').description('e').tags(['e']).notes(['e'])
        }).label('List labels').description('x').tags(['x']).notes(['x']);;
    })
   .add('Large objects', function () {



        const student = Joi.object({
            firstName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            lastName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            email: Joi.string().email().trim().required().label('a').description('a').tags(['a']).notes(['a']),
            picture: Joi.string().trim().min(8).max(100).label('a').description('a').tags(['a']).notes(['a']),
            gender: Joi.string().valid('female', 'male', 'undisclosed').label('a').description('a').tags(['a']).notes(['a']),
            google: {
                token: Joi.string().token().label('a').description('a').tags(['a']).notes(['a']),
                id: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a'])
            },
            address: {
                street: Joi.string().trim().min(20).max(150).label('a').description('a').tags(['a']).notes(['a']),
                city: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
                state: Joi.string().trim().length(2).label('a').description('a').tags(['a']).notes(['a']),
                zipcode: Joi.string().trim().length(5).label('a').description('a').tags(['a']).notes(['a'])
            },
            phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number'),
            gradYr: Joi.number().integer().min(4).max(4).label('a').description('a').tags(['a']).notes(['a']),
            degree: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a']),
            track: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
            semesters: Joi.array().items(
                Joi.object().keys({
                    date: Joi.string().trim().min(9).max(11).required().label('a').description('a').tags(['a']).notes(['a']),
                    complete: Joi.boolean().label('a').description('a').tags(['a']).notes(['a']),
                    courses: Joi.array().items(
                        Joi.object().keys({
                            course: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a']),
                            section: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
                            status: Joi.string().valid('active', 'completed', 'dropped').label('a').description('a').tags(['a']).notes(['a']),
                            grade: Joi.string().trim().min(1).max(4).label('a').description('a').tags(['a']).notes(['a']),
                        })
                    )
                })
            )
        }).label('student');

        const pupil = Joi.object({
            firstName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            lastName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            email: Joi.string().email().trim().required().label('a').description('a').tags(['a']).notes(['a']),
            picture: Joi.string().trim().min(8).max(100).label('a').description('a').tags(['a']).notes(['a']),
            gender: Joi.string().valid('female', 'male', 'undisclosed').label('a').description('a').tags(['a']).notes(['a']),
            google: {
                token: Joi.string().token().label('a').description('a').tags(['a']).notes(['a']),
                id: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a'])
            },
            address: {
                street: Joi.string().trim().min(20).max(150).label('a').description('a').tags(['a']).notes(['a']),
                city: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
                state: Joi.string().trim().length(2).label('a').description('a').tags(['a']).notes(['a']),
                zipcode: Joi.string().trim().length(5).label('a').description('a').tags(['a']).notes(['a'])
            },
            phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number'),
            gradYr: Joi.number().integer().min(4).max(4).label('a').description('a').tags(['a']).notes(['a']),
            degree: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a']),
            track: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
            semesters: Joi.array().items(
                Joi.object().keys({
                    date: Joi.string().trim().min(9).max(11).required().label('a').description('a').tags(['a']).notes(['a']),
                    complete: Joi.boolean().label('a').description('a').tags(['a']).notes(['a']),
                    courses: Joi.array().items(
                        Joi.object().keys({
                            course: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a']),
                            section: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
                            status: Joi.string().valid('active', 'completed', 'dropped').label('a').description('a').tags(['a']).notes(['a']),
                            grade: Joi.string().trim().min(1).max(4).label('a').description('a').tags(['a']).notes(['a']),
                        })
                    )
                })
            )
        }).label('pupil');

        const teacher = Joi.object({
            firstName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            lastName: Joi.string().trim().min(3).max(100).label('a').description('a').tags(['a']).notes(['a']),
            email: Joi.string().email().trim().required().label('a').description('a').tags(['a']).notes(['a']),
            picture: Joi.string().trim().min(8).max(100).label('a').description('a').tags(['a']).notes(['a']),
            gender: Joi.string().valid('female', 'male', 'undisclosed').label('a').description('a').tags(['a']).notes(['a']),
            google: {
                token: Joi.string().token().label('a').description('a').tags(['a']).notes(['a']),
                id: Joi.string().alphanum().label('a').description('a').tags(['a']).notes(['a'])
            },
            address: {
                street: Joi.string().trim().min(20).max(150).label('a').description('a').tags(['a']).notes(['a']),
                city: Joi.string().trim().min(3).max(50).label('a').description('a').tags(['a']).notes(['a']),
                state: Joi.string().trim().length(2).label('a').description('a').tags(['a']).notes(['a']),
                zipcode: Joi.string().trim().length(5).label('a').description('a').tags(['a']).notes(['a'])
            },
            phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number').label('a').description('a').tags(['a']).notes(['a'])
        }).label('teacher');


        const schoolClass = Joi.object({
            pupil: Joi.array().items(pupil),
            teacher: teacher
        }).label('student class');


        const studyGroup = Joi.object({
            students: Joi.array().items(student),
            subject: Joi.string()
        }).label('study group');

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
        console.log('Done...');
    })
    // run async
    .run({ 'async': true });