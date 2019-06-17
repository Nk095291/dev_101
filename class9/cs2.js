const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    // let data = fs.readFileSync("./index.html");
    // res.write(data);
    fs.readFile("./index.html", function (err, data) {
        if (err)
            throw err;
        // console.log(data);
        res.write(data);
        res.end();
    })
    // res.end()
}).listen(8080);