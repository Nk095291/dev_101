var fs = require("fs"); // import fs module,help in reading file content
var http = require("http"); // import http module,help in create local host
var url = require("url");   // import url module,help in parsing the url
http.createServer(      // creating server
    function(req,res){
        var q = url.parse(req.url,true);    // parse the requested url into q
        var filename = "." + q.pathname;        
        fs.readFile(filename,function(err,data){        // fs readfile function ,it read the content of the file
            if(err)         // on any error this part of the code will run 
            {
                res.writeHead(200,{'Content-Type':'text?html'});
                return res.end("file not found");
            }
            res.writeHead(200,{'Content-Type':'text/html'});        // tells the browers to consider the content as html file
            res.write(data);    // write on the server
            res.end();  // disconnect the connection i think
        });
    }).listen(8080);