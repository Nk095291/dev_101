var ajax = require("./filedownload");
//***************************************
let gcount=0;
let arr =[];
let arr2=[];
let response ={};
var files = ["file1", "file2", "file3"];
function getFile(file) {
    let text;
    let fn;

  ajax.fakeAjax(file, function(data) {
// what do we do here?
    // console.log(file+" "+data);
    fn?fn(data):text=data;      
    // if fn is undefine that's means our settime's time has already up,(means we h)

  });

  return function(cb){
    text?cb(text):fn=cb;
  }

}


// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order

let th1 = getFile("file1",0);
let th2 =getFile("file2",1);
let th3 =getFile("file3",2);

th1(function(data){
    console.log(data);
    th2(function(data2){
        console.log(data2);
        th3(function(data3){
            console.log(data3);
        })
    })
})

