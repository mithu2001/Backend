// Common use for the File System module:
/*
Read files   The fs.readFile() method is used to read files on your computer
Create files
Update files
Delete files
Rename files
*/
// var http = require('http');
// var fs = require('fs');
// http.createServer(200,function(req,res){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write("The Message comes from server");


//     res.end();
// }).listen(8080);

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.filepath;
//       var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);