console.log("1");
setTimeout(() => {
    second();
    setTimeout(function () {
        third();
        setTimeout(() => {
            four();
        }, 3000);
    }, 3000)
}, 3000);
function second() {
    console.log("2");
}
function third() {
    console.log("3");
}
function four(){
    console.log("4");
}