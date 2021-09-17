/*
 * Unit Tests
 * 
 */

// Dependencies
let helpers = require('./../lib/helpers');
let assert = require('assert');
let logs = require('./../lib/logs');
let exampleDebuggingProblem = require('./../lib/exampleDebuggingProblem');

// Holder for tests
let unit = {};

// Assert that the getANumber function is returning a number
unit['helpers.getANumber should return number'] = done =>{
    let val = helpers.getANumber();
    assert.equal(typeof(val),"number");
    done();
};

// Assert that the getANumber function is returning 1
unit['helpers.getANumber should return 1'] = done =>{
    let val = helpers.getANumber();
    assert.equal(val,1);
    done();
};

// Assert that the getANumber function is returning 2
unit['helpers.getANumber should return 2'] = done =>{
    let val = helpers.getANumber();
    assert.equal(val,2);
    done();
};

// Logs.list should callback an array and a false error
unit['logs.list should callback a false error and an array of logs name'] = (done)=>{
    logs.list(true,(err,logFilNames) => {
        assert.equal(err,false);
        assert.ok(logFilNames instanceof Array);
        assert.ok(logFilNames.length > 1);
        done();
    });
};

// Logs.truncate should not throw if the logId doesn't exist
unit['Logs.truncate should not throw if the logId does not exist. It should callback an error instead'] = (done)=>{
    assert.doesNotThrow(()=>{
        logs.truncate('I do not exist', (err) => {
            assert.ok(err);
            done();
        });
    },TypeError);
};

// exampleDebuggingProblem.init should not throw (but it does)
unit['exampleDebuggingProblem.init should not throw when called'] = (done)=>{
    assert.doesNotThrow(()=>{
        exampleDebuggingProblem.init();
    },TypeError);
};

// Export the tests to the runner
module.exports = unit;