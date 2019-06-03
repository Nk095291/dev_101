var fs = require("fs");
var folder = process.argv[2];
if(fs.existsSync(folder)==false)
{
    console.log("no folder of this name exist");
}
else{
    fs.rmdirSync(folder);
    console.log("folder deleted");
}
