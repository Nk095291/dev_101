#!/usr/bin/env node
var fs = require("fs");
tree(process.cwd(),"");

function tree(x,st){
    if(fs.statSync(x).isDirectory()==true)
    {
        console.log("dir:"+st+x);
        st += "\t";
        var data = fs.readdirSync(x);
        for(var i =0;i<data.length;i++)
            console.log(st+data[i]);        
        for(var i =0;i<data.length;i++)
            tree(x+"/"+data[i],st);
    }
};

// var ar=[1,3,5,68,8];
// for(var k in ar)
//     console.log(typeof(k));