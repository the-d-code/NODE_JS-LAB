var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('../files/file10.txt');

// Set the encoding to be utf8. 
//readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   
   //console.log(chunk); //gives data in buffer object. do not set encoding type
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});