var ajax = require("./filedownload");
//***************************************
let gcount=0;
let arr =[];
let arr2=[];
let response ={};
var files = ["file1", "file2", "file3"];
function getFile(file,count) {
    
  ajax.fakeAjax(file, function(text) {
// what do we do here?
    // myapproach(text,count);
    console.log(file+" "+text);
    sirapproach(file,text);

  });

}
function myapproach(text,count){
    arr.push(text);
    arr2.push(count);
    console.log(file +" "+ text);
    while(arr2.indexOf(gcount)!=-1)
    {
        console.log(arr[arr2.indexOf(gcount)]);
        gcount++;
    }
    
}
function sirapproach(file,test)
{
    // if(response[test]===undefined)
        response[file]=test;
    for(let i =0;i<files.length;i++)
    {
        debugger;

        if(response[files[i]]!==undefined)
        {
            if(response[files[i]]!==true)
            {
                console.log(files[i]);
                response[files[i]]=true;
            }
        }
        else{
            return;
        }
    }
    console.log("task completed");

}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1",0);
getFile("file2",1);
getFile("file3",2);

