const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"video/mp4"});
    const reader = fs.createReadStream("yo.mp4");

    reader.pipe(res);
    // res.write(fs.readFileSync("vid.mkv"));

    
    // res.end();
}).listen(3000);