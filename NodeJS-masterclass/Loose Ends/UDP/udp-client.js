/**
 * Example UDP client
 * Sending a message to a UDP server on port 6000
 * 
 */

// Dependencie
let dgram = require('dgram');

// Create the client
let client = dgram.createSocket('udp4');

// Define the message and put it into a buffer
let messageString = 'This is a message';
let messageBuffer = Buffer.from(messageString);

// Send of the message
client.send(messageBuffer,3000,'localhost', err =>{
    client.close();
});