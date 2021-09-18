/**
 * Example TCP (net) client
 * Connects to port 5000 and sends the word "ping" to server
 * 
 */

// Dependencies
let net = require('net');

// Define the message to send
let outBoundMessage = "ping";

let client = net.createConnection({'port':5000}, () =>{
    // Send the message
    client.write(outBoundMessage);
});

// When the server writes back, log what it says and kill the client
client.on('data', (inboundMessage) =>{
    let messageString = inboundMessage.toString();
    console.log("I wrote "+outBoundMessage+" and they said "+messageString);
    client.end();
})