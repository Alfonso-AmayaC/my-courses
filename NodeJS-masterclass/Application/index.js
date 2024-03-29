/*
* Primary file for the API
*
*/

// Dependencies
let server = require('./lib/server');
let workers = require('./lib/workers');
let cli = require('./lib/cli');

// Declare the app
let app = {};

// Init function
app.init = function(callback){
    // Start the server
    server.init();

    // Start the workers
    workers.init();

    // Start the CLI, but make sure it starts last
    setTimeout(function(){
      cli.init(); 
      callback(); 
    },50);
};

// Self invoking only if required directly
if(require.main === module)
  app.init(()=>{});

// Export the app
module.exports = app;