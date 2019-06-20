const eventEmitter = require("events");

let emitter = new require("events")();

emitter.on("yo",()=>{console.log("yeah yoo")});

emitter.on("yo",()=>{console.log("yeah again yoo")});

emitter.on("sum",(a,b)=>{console.log(a+b)});

emitter.emit("yo");

emitter.emit("sum",3,4);