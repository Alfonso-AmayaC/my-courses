/**
 * Example VM
 * Running some arbitrary commands
 * 
 */

// Dependencies
let vm = require('vm');

// Define a context for the script to in
let context = {
    'foo':25
};

// Define the script
let script = new vm.Script(`

    foo = foo * 2;
    var bar = foo +1;
    var fizz = 52;

`);

// Run the script
script.runInNewContext(context);
console.log(context);