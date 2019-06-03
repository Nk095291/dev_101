var fs = require("fs");
var foldername = process.argv[2];
if(fs.existsSync(foldername)==true)
{
    console.log("already created");
}
else
{
    fs.mkdirSync(foldername);
    console.log("folder created");
}

fs.renameSync(foldername,"new folder");
console.log("folder has been renamed")
