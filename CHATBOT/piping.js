/*
Piping is a mechanism where we provide the output of one stream as 
the input to another stream. It is normally used to get data from 
one stream and to pass the output of that stream to another stream. 
There is no limit on piping operations.
*/

var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('../files/file1.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('../files/file2.txt');

// Pipe the read and write operations
// read file1.txt and write data to file2.txt
readerStream.pipe(writerStream);

console.log("Program Ended");