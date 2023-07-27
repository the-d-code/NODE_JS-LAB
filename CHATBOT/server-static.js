const http = require('http');
const url = require('url');
const static = require('node-static');
const fs = require('fs');

const fileServer = new static.Server('./Files');

var server = http.createServer(function(request, response) {
	//request.addListener('end',function(){}).resume();
    request.addListener('end', function () {
    	fileServer.serve(request, response);   
    }).resume();
    
}).listen(8000);
console.log("Listening on port number 8000");