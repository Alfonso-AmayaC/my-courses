/**
 * Example TLS server
 * Listens to port 6000 and sends the word "pong" to client
 * 
 */

// Dependencies
let tls = require('tls');
let fs = require('fs');
let path = require('path');

// Server options
let options = {
    'key': fs.readFileSync(path.join(__dirname,'/../https/key.pem')),
    'cert': fs.readFileSync(path.join(__dirname,'/../https/cert.pem'))
};

// Create the server
let server = tls.createServer(options, connection =>{
    // Send the word "pong"
    let outBoundMessage = "pong";
    connection.write(outBoundMessage);

    // When the client writes something, log it out
    connection.on('data', (inboundMessage) =>{
        let messageString = inboundMessage.toString();
        console.log("I wrote "+outBoundMessage+" and they said "+messageString);
    });
});

//Listen
server.listen(6000);