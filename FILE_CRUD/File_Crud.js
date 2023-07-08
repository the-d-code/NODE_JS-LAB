//create file.txt, rename f2.txt to f1.txt
var fs = require('fs');

//create file

fs.writeFile('./File/file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Write file!');
}); 

fs.appendFile('./File/file2.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 





fs.readFile('./File/file1.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

fs.rename('./File/f.txt', './File/f2.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.unlink('./File/f2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});