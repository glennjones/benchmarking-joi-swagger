const Joi = require('joi');
const Helper = require('./helper.js');

module.exports = [{
    method: 'POST',
    path: '/test',
    handler: Helper.defaultHandler,
    config: {
        tags: ['api'],
        validate: {
            payload: {
                a: Joi.number()
                    .required()
                    .description('the first number').default(10),

                b: Joi.number()
                    .required()
                    .description('the second number'),

                operator: Joi.string()
                    .required()
                    .default('+')
                    .valid(['+', '-', '/', '*'])
                    .description('the opertator i.e. + - / or *'),

                equals: Joi.number()
                    .required()
                    .description('the result of the sum')
            }
        }
    }
}];