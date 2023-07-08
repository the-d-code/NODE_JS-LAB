var http=require("http");

var server=http.createServer(function(req,res){
	console.log("Req received = > "+req.url);
   if(req.url=="/")
   {
      res.write("Hello<br>")
      res.write("hello1")
      res.end()   
   }
   else if(req.url=="/list")
   {
      res.write("<html><body><h1>List</h1></body></html>")
      res.end()   
   }
   else
   {
      res.write("Other Pages")
      res.end()   

   }
});
server.listen(8080);
console.log("Listening on port no 8080");




// const http = require('http')
// const port = 8080

// // Create a server object:
// const server = http.createServer(function (req, res) {

// 	// Write a response to the client
// 	res.write('Hello World')

// 	// End the response
// 	res.end()
// })

// // Set up our server so it will listen on the port
// server.listen(port, function (error) {

// 	// Checking any error occur while listening on port
// 	if (error) {
// 		console.log('Something went wrong', error);
// 	}
// 	// Else sent message of listening
// 	else {
// 		console.log('Server is listening on port' + port);
// 	}
// })
