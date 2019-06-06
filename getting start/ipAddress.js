#!/usr/bin/env node
var os = require("os");
var obj = os.networkInterfaces();
// console.log(obj);
console.log("ip address :"+obj.wlp3s0[0].address);
console.log("mac addrss :"+obj.wlp3s0[0].mac);
