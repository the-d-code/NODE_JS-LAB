const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == "/process" && req.method === 'POST') {

        let body = ' ';
        //req.on("data",chunk=>{})
        req.on('data', chunk => {
            body += chunk.toString(); //convert Buffer to string
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok =>' + body);
        });

    } else if (req.url == "/index.html" && req.method === 'GET') {
        var filename = "./Files/index.html";
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, { 'content-Type': 'text/html' });
                return res.end("404 Not Found");
            }

            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(data);
            return res.end();

        });
    } else {
        res.write("/n is not allowed to access!!!");
        return res.end();
    }
});
server.listen(9090);

console.log("server listening on port number 9090");