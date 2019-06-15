let https = require("https");
const Stream = require('stream').Transform;
const fs = require("fs");  
let optoins={
    hostname:"api.nasa.gov",
    port:443,
    path:"/planetary/apod?api_key=oPVndKwL0fUz5jOoRrGAhHY0bsSkSIV3iRIgPN6y",
    method:"GET"
};
let request = https.request(optoins,function(res){
    let data = "";
    res.on("data",function(chunk){
        data += chunk;
    });
    res.on("end",function(){
        // console.log(data);
        let json = JSON.parse(data);
        console.log(json.hdurl);
        console.log(json.hdurl.split('/')[2]);
        console.log(json.hdurl.split('/').slice(3).join('/'));
        downloadImg(json.hdurl.split('/')[2],json.hdurl.split('/').slice(3).join('/'));
        downloadImg(json.url.split('/')[2],json.url.split('/').slice(3).join('/')); 
    });
});
request.on("error",function(error){
    console.log(error);
});

request.end();

function downloadImg(host,p){
    let options2 ={
        hostname:host,
        port:443,
        path:'/'+p,
        method:"GET"
    }
    let  request2 = https.request(options2,function(res){
        let data = new Stream();
        res.on("data",function(chunk){
            data.push(chunk);
        });
        res.on("end",function(){
            if(fs.existsSync("img.jpg")==false)
                fs.writeFileSync("img.jpg",data.read());    //*Just be careful when using 'data.read()', it will empty the stream for the next 'read()' operation. If you want to use it more than once, store it somewhere.
            else
                fs.writeFileSync("img1.jpg",data.read());    //*Just be careful when using 'data.read()', it will empty the stream for the next 'read()' operation. If you want to use it more than once, store it somewhere.
        })
    
    });
    request2.on("error",function(error){
        console.log(error);
    });
    request2.end();
};


