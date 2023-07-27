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
      res.write("List Page")
      res.end()   
   }
   else if(req.url=="/Page1")
   {
      res.write("Page 1")
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


