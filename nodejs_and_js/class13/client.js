const socketIoClient = require('socket.io-client');     // requiring "socket.io-client" to make our client socket enable
let socket = socketIoClient.connect('http://localhost:3000');   //connecting to port:3000
const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:'>>>'
});
reader.question(`what's your name:  `,(name)=>{
    socket.emit('notice',name);
});
socket.on('msg',(data)=>{console.log(data);})

reader.prompt();

reader.on('line',(data)=>{
    let options = data.split('/');
    if(options.length==1)
        socket.emit('message',data);
    else if(options.length==2&&options[0]==='online')
    {   
        socket.emit('currentUser');
    }
    else if(options.length==2)
    socket.emit('PrivateMessage',{
        user:options[0],
        message:options[1]
    });
    reader.prompt();
});
reader.on("close",()=>{
    console.log(chalk.bold.bgBlackBright.magentaBright(figlet.textSync(`byee `.toUpperCase(),{font:"Mini",horizontalLayout:'full'})));// WILL NOT WORK AS CLIENT HAS ALREADY LEFT 
})
