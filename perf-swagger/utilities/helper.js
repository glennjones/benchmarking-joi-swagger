'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Wreck = require('wreck');
const HapiSwagger = require('hapi-swagger');

const helper = module.exports = {};


/**
* creates a Hapi server
*
* @param  {Object} swaggerOptions
* @param  {Object} routes
* @param  {Function} callback
*/
helper.createServer = function (swaggerOptions, routes, callback) {

    helper.createServerWithConnection({}, swaggerOptions, routes, callback);
};

/**
* creates a Hapi server
*
* @param  {Object} swaggerOptions
* @param  {Object} routes
* @param  {Function} callback
*/
helper.createServerWithConnection = function (connectionOptions, swaggerOptions, routes, callback) {

    const server = new Hapi.Server();

    server.connection(connectionOptions);

    server.register([
        Inert,
        Vision,
        {
            register: HapiSwagger,
            options: swaggerOptions
        }
    ], (err) => {

        server.route(routes);
        server.start(function (err) {

            if (err) {
                callback(err, null);
            } else {
                callback(null, server);
            }
        });
    });


};


/**
* a handler function used to mock a response
*
* @param  {Object} request
* @param  {Object} reply
*/
helper.defaultHandler = function (request, reply) {

    reply('ok');
};


/**
* fires a HAPI reply with json payload - see h2o2 onResponse function signature
*
* @param  {Object} err
* @param  {Object} res
* @param  {Object} request
* @param  {Object} reply
* @param  {Object} settings
* @param  {Int} ttl
*/
helper.replyWithJSON  = function (err, res, request, reply, settings, ttl) {

    Wreck.read(res, { json: true }, function (err, payload) {

        reply(payload);
    });
};
