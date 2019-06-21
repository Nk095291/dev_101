const reader = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:'>'
});
const chalk = require('chalk');
const figlet = require('figlet');

const mycmd = require('./cmd.js')

mycmd.header();
reader.prompt();


reader.on('line',function(data){
        let command =data.split(' ')[0];
        data = data.slice(data.indexOf(' ')+1);
        // console.log(data);
        switch(command)
        {
            case 'help':mycmd.help();   
                        break;
            case 'add':mycmd.add(data);
                        break;
            case 'ls':mycmd.ls();
                        break;
            case 'delete':mycmd.del(data);
                        break;
            default:console.log(chalk.bold.red('this command not found'));
        }
        reader.prompt();
    });
