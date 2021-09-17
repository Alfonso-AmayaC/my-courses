/*
* Primary file for the API
*
*/

// Dependencies
let server = require('./lib/server');
let workers = require('./lib/workers');
let cli = require('./lib/cli');
let exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');

// Declare the app
let app = {};

// Init function
app.init = function(){
    // Start the server
    debugger;
    server.init();
    debugger;

    // Start the workers
    debugger;
    workers.init();
    debugger;

    // Start the CLI, but make sure it starts last
    debugger;
    setTimeout(function(){
      cli.init();  
      debugger;
    },50);
    debugger;

    // set foo at 1
    debugger;
    let foo = 1;
    console.log('Just addigned 1 to foo');
    debugger;

    //Increment foo
    foo++;
    console.log('Just incremented foo');
    debugger;

    // Square foo
    foo*=foo;
    console.log('Just squared foo');
    debugger;

    // Convert foo to a string
    foo = foo.toString();
    console.log('Just converted foo to string');
    debugger;

    // Call the init script that will throw
    exampleDebuggingProblem.init();
    console.log('Just called the library');
    debugger;
};

// Execute
app.init();

// Export the app
module.exports = app;