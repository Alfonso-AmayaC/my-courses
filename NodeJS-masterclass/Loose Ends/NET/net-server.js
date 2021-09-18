/**
 * Example TCP (net) server
 * Listens to port 5000 and sends the word "pong" to client
 * 
 */

// Dependencies
let net = require('net');

// Create the server
let server = net.createServer( connection =>{
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
server.listen(5000);