'use strict';
const Joi = require('joi');



const student = Joi.object({
    firstName: Joi.string().trim().min(3).max(100),
    lastName: Joi.string().trim().min(3).max(100),
    email: Joi.string().email().trim().required(),
    picture: Joi.string().trim().min(8).max(100),
    gender: Joi.string().valid('female', 'male', 'undisclosed'),
    google: {
        token: Joi.string().token(),
        id: Joi.string().alphanum()
    },
    address: {
        street: Joi.string().trim().min(20).max(150),
        city: Joi.string().trim().min(3).max(50),
        state: Joi.string().trim().length(2),
        zipcode: Joi.string().trim().length(5)
    },
    phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number'),
    gradYr: Joi.number().integer().min(4).max(4),
    degree: Joi.string().alphanum(),
    track: Joi.string().trim().min(3).max(50),
    semesters: Joi.array().items(
        Joi.object().keys({
            date: Joi.string().trim().min(9).max(11).required(),
            complete: Joi.boolean(),
            courses: Joi.array().items(
                Joi.object().keys({
                    course: Joi.string().alphanum(),
                    section: Joi.string().trim().min(3).max(50),
                    status: Joi.string().valid('active', 'completed', 'dropped'),
                    grade: Joi.string().trim().min(1).max(4),
                })
            )
        })
    )
}).label('student');

const pupil = Joi.object({
    firstName: Joi.string().trim().min(3).max(100),
    lastName: Joi.string().trim().min(3).max(100),
    email: Joi.string().email().trim().required(),
    picture: Joi.string().trim().min(8).max(100),
    gender: Joi.string().valid('female', 'male', 'undisclosed'),
    google: {
        token: Joi.string().token(),
        id: Joi.string().alphanum()
    },
    address: {
        street: Joi.string().trim().min(20).max(150),
        city: Joi.string().trim().min(3).max(50),
        state: Joi.string().trim().length(2),
        zipcode: Joi.string().trim().length(5)
    },
    phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number'),
    gradYr: Joi.number().integer().min(4).max(4),
    degree: Joi.string().alphanum(),
    track: Joi.string().trim().min(3).max(50),
    semesters: Joi.array().items(
        Joi.object().keys({
            date: Joi.string().trim().min(9).max(11).required(),
            complete: Joi.boolean(),
            courses: Joi.array().items(
                Joi.object().keys({
                    course: Joi.string().alphanum(),
                    section: Joi.string().trim().min(3).max(50),
                    status: Joi.string().valid('active', 'completed', 'dropped'),
                    grade: Joi.string().trim().min(1).max(4),
                })
            )
        })
    )
}).label('pupil');

const teacher = Joi.object({
    firstName: Joi.string().trim().min(3).max(100),
    lastName: Joi.string().trim().min(3).max(100),
    email: Joi.string().email().trim().required(),
    picture: Joi.string().trim().min(8).max(100),
    gender: Joi.string().valid('female', 'male', 'undisclosed'),
    google: {
        token: Joi.string().token(),
        id: Joi.string().alphanum()
    },
    address: {
        street: Joi.string().trim().min(20).max(150),
        city: Joi.string().trim().min(3).max(50),
        state: Joi.string().trim().length(2),
        zipcode: Joi.string().trim().length(5)
    },
    phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number')
}).label('teacher');


const schoolClass = Joi.object({
    pupil: Joi.array().items(pupil),
    teacher: teacher
}).label('student class');


const studyGroup = Joi.object({
    students: Joi.array().items(student),
    subject: Joi.string()
}).label('study group');


const HTTPStatus = {
    '200': {
        'description': 'Success',
        'schema': schoolClass
    },
    '400': {
        'description': 'Bad Request'
    },
    '404': {
        'description': 'Sum not found'
    },
    '500': {
        'description': 'Internal Server Error'
    }
};


/**
 * mock handler for routes
 *
 * @param  {Object} request
 * @param  {Object} reply
 */
const defaultHandler = function (request, reply) {

    reply('ok');
};

let multipleBy = 5;
let institutionNames = ['school', 'university', 'college', 'academy', 'institution', 'faculty', 'department'];
let institutions = [];
let x = 0;
while (x < multipleBy) {
    institutionNames.forEach((institution) => {
        institutions.push(institution + x);
    });
    x++;
}
let routes = [];


institutions.forEach((institution) => {
    routes.push({
        method: 'GET',
        path: '/' + institution,
        config: {
            handler: defaultHandler,
            description: 'Get list of ' + institution,
            notes: ['Get list of ' + institution + ' from the store'],
            tags: ['api']
        }
    },{
        method: 'GET',
        path: '/' + institution + '/{id}',
        config: {
            handler: defaultHandler,
            description: 'Get ' + institution,
            notes: ['Get a ' + institution + ' from the store'],
            tags: ['api'],
            validate: {
                params: {
                    id: Joi.string()
                        .required()
                        .description('the id of the ' + institution + ' in the store')
                }
            }
        }
    });
    routes.push({
        method: 'POST',
        path: '/' + institution,
        config: {
            handler: defaultHandler,
            description: 'Add ' + institution,
            notes: ['Adds a ' + institution + ' to the data store, using JSON object in payload'],
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responses: HTTPStatus
                }
            },
            validate: {
                payload: Joi.object({
                    pupil: Joi.object({
                        firstName: Joi.string().trim().min(3).max(100),
                        lastName: Joi.string().trim().min(3).max(100),
                        email: Joi.string().email().trim().required(),
                        picture: Joi.string().trim().min(8).max(100),
                        gender: Joi.string().valid('female', 'male', 'undisclosed'),
                        google: {
                            token: Joi.string().token(),
                            id: Joi.string().alphanum()
                        },
                        address: {
                            street: Joi.string().trim().min(20).max(150),
                            city: Joi.string().trim().min(3).max(50),
                            state: Joi.string().trim().length(2),
                            zipcode: Joi.string().trim().length(5)
                        },
                        phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number'),
                        gradYr: Joi.number().integer().min(4).max(4),
                        degree: Joi.string().alphanum(),
                        track: Joi.string().trim().min(3).max(50),
                        semesters: Joi.array().items(
                            Joi.object().keys({
                                date: Joi.string().trim().min(9).max(11).required(),
                                complete: Joi.boolean(),
                                courses: Joi.array().items(
                                    Joi.object().keys({
                                        course: Joi.string().alphanum(),
                                        section: Joi.string().trim().min(3).max(50),
                                        status: Joi.string().valid('active', 'completed', 'dropped'),
                                        grade: Joi.string().trim().min(1).max(4),
                                    })
                                )
                            })
                        )
                    }).label('pupil'),
                    teacher: Joi.object({
                        firstName: Joi.string().trim().min(3).max(100),
                        lastName: Joi.string().trim().min(3).max(100),
                        email: Joi.string().email().trim().required(),
                        picture: Joi.string().trim().min(8).max(100),
                        gender: Joi.string().valid('female', 'male', 'undisclosed'),
                        google: {
                            token: Joi.string().token(),
                            id: Joi.string().alphanum()
                        },
                        address: {
                            street: Joi.string().trim().min(20).max(150),
                            city: Joi.string().trim().min(3).max(50),
                            state: Joi.string().trim().length(2),
                            zipcode: Joi.string().trim().length(5)
                        },
                        phone: Joi.string().regex(/(\(?[0-9]{3}\)?|[0-9]{3}).?[0-9]{3}.?[0-9]{4}/, 'US number')
                    }).label('teacher')
                }).label('student class')
            }
        }
    });
    routes.push({
        method: 'PUT',
        path: '/' + institution,
        config: {
            handler: defaultHandler,
            description: 'Add ' + institution,
            notes: ['Adds a ' + institution + ' to the data store, using JSON object in payload'],
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responses: HTTPStatus
                }
            },
            validate: {
                payload: studyGroup
            }
        }
    },{
        method: 'DELETE',
        path: '/' + institution + '/{id}',
        config: {
            handler: defaultHandler,
            description: 'Delete ' + institution,
            notes: ['Detele a ' + institution + ' from the store'],
            tags: ['api'],
            validate: {
                params: {
                    id: Joi.string()
                        .required()
                        .description('the id of the ' + institution + ' in the store')
                }
            }
        }
    });

});

module.exports = routes;
