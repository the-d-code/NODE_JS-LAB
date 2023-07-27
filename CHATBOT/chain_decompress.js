var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('../files/file3.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('../files/file4.txt','utf-8'));
  
console.log("File Decompressed.");