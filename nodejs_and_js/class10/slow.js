const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain"});
    fs.readFile("yo.txt",function(err,data){        //6KB chunks at a time.
        res.write(data);
        console.log(process.memoryUsage().external/1024);   // using almost same memory as the size of the file
        res.end();
    });
}).listen(8080);