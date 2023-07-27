const fs = require('fs');
const server = require('http').createServer();
/*
server.on('request', (req, res) => {
  fs.readFile('./file.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});*/

server.on('request', (req, res) => {
//  const src = fs.createReadStream('../files/file1.txt');
  const src = fs.createReadStream('./file.txt');
  src.pipe(res);
});
server.listen(8090);