//async functoins ---------------------------------------
function uploading(filename,cb){
    console.log(`uploading ${filename} `);
    setTimeout(() => {
        cb(filename)
    }, 3000);
}
function compressing(path,compress){
    console.log(`compressing : ${path}`);
    setTimeout(() => {
        compress(path);
    }, 2000);
}
function downloading(url,cb)
{
    console.log(`downloading form ${url}`);
    console.log(`in c://download/`);

    setTimeout(()=>{cb(url.slice(url.lastIndexOf('/')+1))},3000);
}

// callback functoins----------------------------------

function upload(file){
    console.log(`${file} has been uploaded :)`);
}
function compress(path)
{
    //------------------------------------complex and bad way to do this------------------------
    // let filename= path.slice(path.lastIndexOf('/'));
    // let newfilename =path.slice(0,path.lastIndexOf('/')) +filename.slice(0,filename.indexOf('.'))+'_com'+filename.slice(filename.indexOf('.'));
    //----------------------------------------------------------------------------------------------------------
    let sep = path.split('.');
    let newfilename= sep[0]+`_com.`+sep[1];
    console.log(`file has been compressed  and saved as: ${newfilename}`);
    uploading(newfilename,upload);
}
function download(filename)
{
    // let filename= url.slice(url.lastIndexOf('/')+1);        // here we are sending all the info to the functoin which is insecure thus we should just pass the file name
    console.log(`file saved to c://donwload/${filename}`);
    compressing(`c://donwload/${filename}`,compress);
}

// given a url, mimic downloading's behaviour\
// url:http://google.com/logo.png

downloading('http://google.com/logo.png',download);

// conpressing(path,compress);
