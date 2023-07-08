var fs = require('fs');

var data = fs.readFileSync( "./File/F1.txt","utf-8" );
console.log( data );

fs.readFile( "./File/F1.txt","utf-8", function( err, data ) {
    console.log(data);
    console.log("msg")
    });

console.log( "File reading complete!!" );