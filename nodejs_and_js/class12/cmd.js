const figlet = require('figlet');
const chalk = require('chalk');
const fs = require('fs');

function logy(data){console.log(chalk.yellow(data))};
const errorMsg = chalk.bold.red('wrong command');

function fetchData(){
    if(fs.existsSync('./task.json')===false)
        return [];
    return fs.readFileSync('./task.json').length==0?[]:JSON.parse(fs.readFileSync('./task.json'));
}
function saveData(data){
    fs.writeFileSync('./task.json',JSON.stringify(data));
}

function header(){
console.log(chalk.bold.blue(figlet.textSync('tasker',{font:"Avatar",horizontalLayout:'full'})));
}

function help(){
    console.log('Available commands');
    console.log('1. add task_name');
    console.log('2. (ls to list all the tasks)');
    console.log('1. delete id');
}

function ls(){
    let data = fetchData();
    console.log('all tasks');
    for(let i in data)
    {   
        logy(data[i].id+" "+data[i].data);
    }
}

function add(data){
    if(data==='add')
        {
            console.log(errorMsg);
            return;
        }
    let newdata = fetchData();
    newdata.push({id:newdata.length==0?1:newdata[newdata.length-1].id+1,data});
    saveData(newdata);
    logy('task has been added');
}

function del(data)
{
    if(data==='delete')
    {
        console.log(errorMsg);
        return;
    }
    let tasks = fetchData();
    let afterdel = tasks.filter(e=>e.id!=data);
    afterdel.forEach((e,i) => {
        e.id=i+1;
    });
    saveData(afterdel);
    tasks.length==afterdel.length?logy('id not found'):logy('task deleted');

}
module.exports={
    help,
    header,
    ls,
    add,
    del
}