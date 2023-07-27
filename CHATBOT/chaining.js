var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('../files/file1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('../files/file3.txt.gz'));
  
console.log("File Compressed.");