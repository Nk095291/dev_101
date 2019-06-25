//-----------------------------------------traditional CD------------------------------
// function download(url,downloaded)
// {
//     console.log(`download form ${url}`);
//     setTimeout(() => {
//             let img = url.split('/').pop();
//             downloaded(img);
//     }, 4000);
// };

// download('www.google.com/yo.jpg',function(img){
//     console.log(`Img has been downloaded: ${img}`);
// });

//--------------------------------------------------------promise   ------------------------------

function download(url)
{
    return new Promise((resolve,reject)=>{
    console.log(`download form ${url}`);
        setTimeout(() => {
            let img = url.split('/').pop();
            resolve(img);   //can call it only once
        }, 4000);
    });
}
//resolve the "inversion control" problem,because we have result and it's upto you to use it however you want
//resolve the "hell loop" problem,
download('www.google.com/yo.jpg').then((img)=>{
    console.log(`img has been download : ${img}`);
});                                                         