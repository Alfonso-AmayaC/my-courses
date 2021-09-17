/**
 * This is the test runner
 * 
 */

// Override the NODE_ENV variable
process.env.NODE_ENV = 'testing';

// Application logic for the test runner
_app = {};

// Container for the test
_app.test = {};

// Add on the unit tests
_app.test.unit = require('./unit');
_app.test.api = require('./api');

// Count all the test
_app.countTest = ()=>{
    let counter = 0;
    for(let key in _app.test){
        if(_app.test.hasOwnProperty(key)){
            let subTest = _app.test[key];
            for(let testName in subTest){
                if(subTest.hasOwnProperty(testName)){
                    counter++;
                }
            }
        }
    }
    return counter;
}

// Run all the test collecting the errors and successes
_app.runTest = () =>{
    let errors = [];
    let successes = 0;
    let limit = _app.countTest();
    let counter = 0;

    for(let key in _app.test){
        if(_app.test.hasOwnProperty(key)){
            let subTest = _app.test[key];
            for(let testName in subTest){
                if(subTest.hasOwnProperty(testName)){
                    (function(){
                        let tmpTestName = testName;
                        let testValue = subTest[testName];
                        // Call the test
                        try{
                            testValue(() =>{
                                // If it calls back without trowing, then it succeded so log it in green
                                console.log('\x1b[32m%s\x1b[0m',tmpTestName);
                                counter++;
                                successes++;
                                if(counter == limit){
                                    _app.produceTestReport(limit,successes,errors);
                                }
                            });
                        } catch(e) {
                            // If it throws then it failed, so capture the error thrown and log it in red
                            console.log('\x1b[31m%s\x1b[0m',tmpTestName);
                            counter++;
                            errors.push({
                                'name':testName,
                                'error':e
                            });
                            if(counter == limit){
                                _app.produceTestReport(limit,successes,errors);
                            }
                        }
                    })();
                }
            }
        }
    }
};

// Produce a test outcome report
_app.produceTestReport = (limit,successes,errors)=>{
    console.log("");
    console.log("-------------- BEGIN TEST REPORT --------------");
    console.log((""));
    console.log("Total Test: ", limit);
    console.log("Pass: ", successes);
    console.log("Fail: ", errors.length);
    console.log("");

    // If there are error print them in detail
    if(errors.length > 0){
        console.log("-------------- BEGIN ERROR REPORT --------------");
        console.log("");

        errors.forEach(testError => {
            console.log('\x1b[31m%s\x1b[0m',testError.name);
            console.log(testError.error);

        });

        console.log("");
        console.log("-------------- END ERROR REPORT --------------");
    }

    console.log("");
    console.log("-------------- END TEST REPORT --------------");
    process.exit(0);
}

// Run the test
_app.runTest();

