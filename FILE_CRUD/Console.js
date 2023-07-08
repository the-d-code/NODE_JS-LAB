
//This will be show path with the file name
console.log(__filename);

//This will be show path of directory or folder
console.log(__dirname);

// It print hello
function printHello() {
   console.log( "Hello!");
}

// It set timeout for printhello function with timeout 2000 ms.
var t = setTimeout(printHello, 2000);
//clearTimeout(t);



// it will print warning message and label with timeend
// Warning abc! 
// label1: 3.92ms
console.time("label1");
const name1 = 'abc';  
var a={name:"abc",salary:2000};
console.warn(`Warning ${name1}! `);   
//process.exit();
console.timeEnd('label1');



// Printing to console
console.info("Program Output");
process.stdout.write("Hello World!" + "\n");



// Reading passed parameter Command line arguments
//Show all data regarding system and code
 process.argv.forEach(function(v,i){});
process.argv.forEach(function(val, index) {
   console.log(index + ': ' + val);
});

console.log(process.execPath); // Getting executable path

console.log(process.platform); // Platform Information

  console.log(process.env);
  
//console.error(new Error('Error msg.'));