function downloadFile(url) {
    let name = url.split("/").pop();
    var path = "C:\\Downloads\\" + `${name}`;
    console.log(`downloading file from ${url}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`file saved to c: ${path}`);
            resolve(path);
            // resolve(1)
        }, 3000);
    })
}

function compressFile(filePath) {
    console.log(`we are compressing : ${filePath}`);
    newfilepath = filePath.split('.').shift() + '-resized' + '.pgn';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log( `file compressed to : ${newfilepath}`);
            resolve( newfilepath);
        }, 2000)
    });

}
function uploadFile(diskPath) {
    var uploadUrl = "http://pep/uploads";
    console.log(`uploading file to : ${uploadUrl}`);
    newUploadUrl = uploadUrl + '/' + diskPath.split('/').pop();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`file has been upload to : ${newUploadUrl}`);
        }, 3000);
    });
}
downloadFile('url:http://google.com/logo.png').then(compressFile).then(uploadFile).then((msg) => {
    console.log(msg);
    console.log('task completed');
})


