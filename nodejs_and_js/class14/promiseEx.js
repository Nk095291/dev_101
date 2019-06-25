let flag = false;
function msg() {
    return new Promise((resolve, reject) => {
        if (flag) {
            resolve('no error');
            console.log('hello');       // this will work fine , and will print "hello".
            reject('heelo');        // it will not return as we have already return resolve
        }
        else
            reject('error');
    });
}

msg().catch(err => { console.log(err)
    return new Promise((resolve,reject)=>{
        resolve('test');
    });
})
    .then(ok => { console.log(ok) });                // seq do matter 
