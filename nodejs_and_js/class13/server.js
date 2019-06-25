const http = require("http");   // requiring http module to create http server
const server = http.createServer();         // creating server
const socketio = require("socket.io");  // requiring "socket.io" module
const socketServer=socketio(server);    //making our "http" server "socket" enable
const chalk = require('chalk');
const figlet = require('figlet');

socketServer.listen(3000);                  // assigning local port to the server

console.log('server is listening to port :3000');

let users=[];

socketServer.on('connect',(socket)=>{               // event emitter that will emit when connect is made between server and client
    // console.log(socket.id);    //printing socket's uinque id(unique id will be assign to each client everyTime)
    socket.on('notice',(name)=>{
        users.push({
            id:socket.id,
            name
        });

        console.log(chalk.white(`${name} has been joined`));

        socket.emit('msg',chalk.bold.bgBlackBright.magentaBright(figlet.textSync(`welcome ${name}`.toUpperCase(),{font:"Mini",horizontalLayout:'full'})));

        socket.broadcast.emit('msg',chalk.white(`${name} has been joined`));  // send msg to all the clients expect the sender
        // socketServer.emit('username',name);      // send msg to all the clients(also the sender)

        socket.on('message',(data)=>{
            // console.log(data);
            socket.broadcast.emit('msg',chalk.blue(name+" :"+data));
        });

        socket.on('PrivateMessage',(obj)=>
        {
            let usersid = users.filter(e=>e.name===obj.user)[0];
            if(usersid)
                socketServer.to(usersid.id).emit('msg',chalk.red(name+" : "+obj.message));
            else 
                socket.emit('msg',chalk.red("user not online"));   // msg the sender that the user you want to chat is not online 
                    // instead of upper line i can simply use "socket.emit()"
        });

        socket.on('currentUser',()=>{
            let onlineUserName=`online users: \n`;
            users.forEach(e=>{
                onlineUserName+=`${e.name} \n`;
            });
            socket.emit('msg',chalk.bold.blue(onlineUserName));
        });

        socket.on('disconnect',()=>{
            // socket.emit('msg',chalk.bold.bgBlackBright.magentaBright(figlet.textSync(`byee ${name}`.toUpperCase(),{font:"Mini",horizontalLayout:'full'}))); WILL NOT WORK AS CLIENT HAS ALREADY LEFT 
            socketServer.emit('msg',chalk.white(`${name} has left`));  
            users=users.filter(e=>e.id!==socket.id);
        });
    });  
});
