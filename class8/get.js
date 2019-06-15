const https = require("https");
const fs = require("fs");
const optoins={   
    hostname:"jsonplaceholder.typicode.com",  
    port:443,
    path:"/users",
    method:"GET"
};


function createFile(arobj)
{
    // console.log(__dirname);
    let folder = __dirname+"/user/";
    if(fs.existsSync(folder))
    {
        fs.rmdirSync(folder);
    }
    fs.mkdirSync(folder);
    arobj.forEach(function create(e){
        let fileName =folder+ e.username+".txt";
        let data="";
        for(let i in e)
        {
            // if(typeof e === Object)
            // {
            //     create(e);
            // }
            // else
            // {
            data =data+ `${i} : ${e[i]}\n`;
            // }
        }



        fs.appendFileSync(fileName,data);
    });
}


var request = https.request(optoins,function(res){
    var data = "";
    var count = 0;
    res.on("data",function(d){
        data = data + d;
        count++;
    });
    res.on("end",function(){
        // console.log(data);
        console.log(count);
        let jsonFile=JSON.parse(data);
        // console.log(jsonFile);
        createFile(jsonFile);
    });
});

request.on("error",function(error){
    console.log(error);
});

request.end();
