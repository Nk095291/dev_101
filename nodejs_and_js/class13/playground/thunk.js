function add(a,b)
{
    return a+b;
}
let syncThunk = function(){
    return add(10,15);
}
console.log(syncThunk());

function asyncAdd(a,b,cb){
    setTimeout(() => {
        cb(ab);
    }, 2000);
}

let asyncThunk = function(cb)
{
    asyncAdd(10,15,cb);
}

asyncThunk(function(data){
    console.log(data);
})