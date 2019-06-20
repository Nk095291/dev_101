const readline = require("readline");


const commands = require("./commands.js");

const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"<nitin's>"
});

reader.prompt();
reader.on("line",function(data){
    data = data.split(' ');
    if(commands.hasOwnProperty(data[0])===true)
    {
        commands[data[1]];
    }
    reader.prompt();
})
reader.on("close",function(){
    console.log();
    console.log("see yeah");
})


// commands.ls("./");
// commands.mkdir('./yo');
// commands.rmdir('./yo');
// commands.touch('yo.txt')
// commands.rm('yo.txt')