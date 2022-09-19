var http = require('http'); //imported http built in module
var dt = require('./myfirstmodule'); //imported module
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});//The first argument of the res.writeHead() method is the status code, 
                             //200 means that all is OK, the second argument is an object containing the response headers.
    
    res.write("The current time and date is :"+dt.myDateTime());//Write a Response for Client
    res.end();//end the response
    
}).listen(8000);//the server object listens on port 8000