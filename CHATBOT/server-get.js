const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    var u1 = url.parse(req.url,true); //parseQueryString <boolean> If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Default: false.
    if (u1.pathname=="/process" && req.method === 'GET') 
    {
        res.write(u1.query.fname+" "+u1.query.age) 
        res.end();        
    }
    else if (req.url=="/file1.html" && req.method === 'GET')
    {
            var filename = "./files/file1.html";
            fs.readFile(filename, function(err, data) {
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Page Not Found");
            } 
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
            });    
    }
    else 
    {
        res.write("/ is not allowed to access!!!");
        return res.end();
    }
});
server.listen(9090);

console.log("Server listeniing on port number 9090");