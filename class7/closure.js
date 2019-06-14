var b="yo";
function hey(a){
    return function hey2(b){
        console.log(`${a} ${b}`);
    }
}
var c = hey("nitin");
c("kumar");                 // work totally fine