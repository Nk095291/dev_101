#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var data = fs.readdirSync(process.cwd());
console.log(data);
// let ar = process.argv;
// console.log(ar);
// console.log(__dirname);             //give dir where the file is stored
// console.log(path.dirname(ar[1]));   // same as 
// console.log(path.resolve('.'));                 