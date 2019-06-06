#!/usr/bin/env node
var fs = require("fs");
var src = process.argv[2];
var des = process.argv[3];
fs.copyFileSync(src,des);

