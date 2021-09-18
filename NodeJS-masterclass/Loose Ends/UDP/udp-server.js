/**
 * Example UDP Server
 * Creating a UDP datagram server listening on 6000
 * 
 */

// Dependencies
let dgram = require('dgram');

// Creating a server
let server = dgram.createSocket('udp4');

server.on('message', (messageBuffer,sender)=>{
    // Do something with an incoming message o do something with the sender
    let messageString = messageBuffer.toString();
    console.log(messageString);
});

// Bind to 6000
server.bind(3000);