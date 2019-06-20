const fs = require("fs");
function ls(path){
    console.log("-----------------------");
    let data = fs.readdirSync(path);
    data.forEach(e=>console.log(e));
    console.log("-----------------------");

}
function mkdir(path){
    if(fs.existsSync(path)===false){
        fs.mkdirSync(path);
        console.log("folder has been created");
    }else{
        console.log("already exist!!!!");
    }
   
}
function rmdir(path){
    if(fs.existsSync(path)===true){
        fs.rmdirSync(path);
        console.log("folder has been deleted");    
    }
    else{
        console.log("folder not found");
    }
   }
function touch(file){
    if(fs.existsSync(file)===false){
        fs.writeFileSync(file,'');
        console.log("file has been created");
    }else{
        console.log("already exist!!!!");
    }
}
function rm(file){
    if(fs.existsSync(file)===true){
        fs.unlinkSync(file);
        console.log("file has been deleted");    
    }
    else{
        console.log("file not found");
    }
}
module.exports={
    ls,
    mkdir,
    rmdir,
    touch,
    rm
}