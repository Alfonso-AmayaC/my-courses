/*
* Primary file for the API
*
*/

// Dependencies
let server = require('./lib/server');
let workers = require('./lib/workers');
let cli = require('./lib/cli');
let cluster = require('cluster');
let os = require('os');

// Declare the app
let app = {};

// Init function
app.init = function(callback){

    if(cluster.isMaster){
      // If we're  on the master thread, start the workers and he CLI
      workers.init();

      // Start the CLI, but make sure it starts last
      setTimeout(function(){
        cli.init(); 
        callback(); 
      },50);


      // Fork the process
      for(let i=0;i<os.cpus().length;i++){
        cluster.fork();
      }

    }  else {
      // If we're not on the master thread, start the server
      server.init();
    }
    
};

// Self invoking only if required directly
if(require.main === module)
  app.init(()=>{});

// Export the app
module.exports = app;