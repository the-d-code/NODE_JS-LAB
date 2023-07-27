var http=require("http");
let fs=require("fs")
var server=http.createServer(function(req,res){
	console.log("Req received = > "+req.url);
   if(req.url=="/page1")
   {
      fs.readFile("./files/index.html","utf8",(err,data)=>{
         res.write(data)
         res.end();
      })
   }
   else if(req.url=="/")
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
