var ajax = require("./filedownload");
//***************************************
var ajax = require("./filedownload");
//***************************************
let gcount = 0;
let arr = [];
let arr2 = [];
let response = {};
var files = ["file1", "file2", "file3"];
function getFile(file) {
    return new Promise((resolve, reject) => {
        ajax.fakeAjax(file, function (data) {
            console.log(file + " " + data);
            resolve(data);
        });
    });
}


// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order

let p1 = getFile("file1");
let p2 = getFile("file2");
let p3 = getFile("file3");

p1.then((data) => {
    console.log(data)
    return p2;
}).then((data) => {
    console.log(data)
    return p3;
}).then((data) => {
    console.log(data)

});


