var fs = require("fs");
var folder = process.argv[2];
if(fs.existsSync(folder)==false)
{
    var fd=fs.openSync(folder,"w");
    console.log("created");
    fs.closeSync(fd);
}
else{
    console.log("A C");
    fs.unlink(folder);
    console.log("now it is deleted");
}