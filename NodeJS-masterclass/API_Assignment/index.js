/*
 * Hello world API
 * Author: Alfonso A
 */

let http = require('http');
let url = require('url');

let server = http.createServer(function(req,res){
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');
    let chosenHandler = typeof(routes[trimmedPath]) !== 'undefined' ? routes[trimmedPath] : handlers.notFound;

    chosenHandler((serverResponse) => {
        serverResponse = typeof(serverResponse) == 'object' ? serverResponse : {};
        let serverResponseString = JSON.stringify(serverResponse);
        res.setHeader('Content-Type','application/JSON');
        res.end(serverResponseString);

        console.log('Returning this response: ', serverResponseString);
    });
    
});

server.listen(3000,function(){
    console.log('I\'m ready on port 3000');
})

let handlers = {};

handlers.hello = (callback)=>{
    callback({'Server says':'Hello world'});
}
handlers.notFound = (callback)=>{
    callback({'Server says':'Can\'t find the route'});
}

let routes = {
    'hello':handlers.hello
}