const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"image/jpg"});
    fs.readFile("./wolf.jpg",function(err,img){
        if(err)
            throw err;
        res.write(img);
        res.end();
    })
}).listen(4000);