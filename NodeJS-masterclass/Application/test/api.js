/**
 *  API Tests
 * 
 */

// Dependencies
let app = require('./../index');
let assert = require('assert');
let http = require('http');
let config = require('./../lib/config');

// Create a holder for the tests
let api = {};

// Helpers
let helpers = {};
helpers.makeGetRequest = (path,callback)=>{
    // Configure the request details

    // Send the request afterwards
    let requestDetails = {
        'protocol':'http:',
        'hostname':'localhost',
        'port':config.httpPort,
        'method':'GET',
        path,
        'headers':{
            'Content-Type':'application/json'
        }
    };
    // Send the request
    let req = http.request(requestDetails, (res) =>{
        callback(res);
    });
    req.end();
};

// The main init function should be able to run without throwing
api['app.init should start whitout throwing'] = (done) =>{
    assert.doesNotThrow(()=>{
        app.init((err)=>{
            done();
        })
    },TypeError);
}

// Make a request to ping
api['/ping should respond to GET with 200'] = (done) => {
    helpers.makeGetRequest('/ping',(res) => {
        assert.equal(res.statusCode,200);
        done();
    });
};

// Make a request to users
api['/ping should respond to GET with 400'] = (done) => {
    helpers.makeGetRequest('/api/users',(res) => {
        assert.equal(res.statusCode,400);
        done();
    });
};

// Make a request to a random path
api['A random path should respond to GET with 404'] = (done) => {
    helpers.makeGetRequest('/this/path/does/not/exist',(res) => {
        assert.equal(res.statusCode,404);
        done();
    });
};

// Export the test to the runner
module.exports = api;