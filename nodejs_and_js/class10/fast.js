const fs = require("fs");
const http = require("http");


http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain"});
    const reader = fs.createReadStream("yo.txt");
    reader.pipe(res);      //Just be careful when using 'data.read()'(pipe() will do the same), it will empty the stream for the next 'read()' operation. If you want to use it more than once, store it somewhere.
    console.log(process.memoryUsage().external/2048);
    // res.end();   // pipe ends the res automatically
}).listen(8080);