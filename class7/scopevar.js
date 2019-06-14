let x=10;
function a(){
    let x =20;
    console.log(x);
    if(true)
    {
        let x =30;      // work totally 
        console.log(x);
    }
    console.log(x);

}
console.log(x);
a();