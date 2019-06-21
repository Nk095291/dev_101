const readline = require("readline");
const yargs = require("yargs");
const chalk = require("chalk");
const figlet = require("figlet");


const commands = require("./commands.js");

// const color =

const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:chalk.bold.bgBlueBright.inverse(figlet.textSync('hey bade',{font:"Ghost",horizontalLayout:"full",verticalLayout:"full"}))
});

reader.prompt();
reader.on("line",function(data){
    console.log(yargs.argv);
    data = data.split(' ');
    data.argv._=data;
    console.log(yargs.argv._);
    
    if(data[0]==='ls'){
        commands.ls(data[1]==undefined?'./':data[1]);
    }
    else if(data[0]==='mkdir')
    {
        commands.mkdir(data[1]);
    }
    else if(data[0]==='rmdir')
    {
        commands.rmdir(data[1]);
    }
    else if(data[0]==='touch')
    {
        commands.touch(data[1]);
    }
    else if(data[0]==='rm')
    {
        commands.rm(data[1]);
    }


    reader.prompt();
})
reader.on("close",function(){
    console.log();
    console.log("see yeah");
})