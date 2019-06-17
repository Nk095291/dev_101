const http = require("http");
const https = require("https");

http.createServer(function(req,res){
    res.writeHead(200,{"context-type":"test/html"});
    res.write("nitin kumar");
    let optoins={
        hostname:"jsonplaceholder.typicode.com",
        port:443,
        path:"/users",
        method:"GET"
    };
    let request = https.request(optoins,function(res2){
        let data = "";
        res2.on("data",function(chunk){
            data += chunk;
        });
        res2.on("end",function(){
            res.write(data);
            res.end();    
        });
    });
    request.on("error",function(error){
        console.log(error);
    });
    request.end();


}).listen(3000);