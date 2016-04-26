'use strict';
const Joi = require('joi');



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
                payload: schoolClass
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
