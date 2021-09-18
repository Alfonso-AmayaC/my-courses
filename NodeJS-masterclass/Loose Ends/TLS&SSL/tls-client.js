/**
 * Example TLS client
 * Connects to port 6000 and sends the word "ping" to server
 * 
 */

// Dependencies
let tls = require('tls');
let fs = require('fs');
let path = require('path');

// Server options
let options = {
    'ca': fs.readFileSync(path.join(__dirname,'/../https/cert.pem')) // Only required because we are using a self-signed certificate
};

// Define the message to send
let outBoundMessage = "ping";

let client = tls.connect(6000,options, () =>{
    // Send the message
    client.write(outBoundMessage);
});

// When the server writes back, log what it says and kill the client
client.on('data', (inboundMessage) =>{
    let messageString = inboundMessage.toString();
    console.log("I wrote "+outBoundMessage+" and they said "+messageString);
    client.end();
})