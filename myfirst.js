var http = require('http'); //imported http built in module
var dt = require('./myfirstmodule'); //imported module
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});//The first argument of the res.writeHead() method is the status code, 
                             //200 means that all is OK, the second argument is an object containing the response headers.
    
    //Write a Response for Client
    res.write(`
    <h1 style="color:red;">Hello India</h1><br/>
    <input type="button">
    The current time and date is :-${dt.myDateTime()}
    `
    
    );
    res.end();//end the response
    
}).listen(8000);//the server object listens on port 8000