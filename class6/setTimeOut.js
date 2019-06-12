function getData(num,cb){
    setTimeout(() => {
        cb(num);
    }, (1000));
}
getData(10,fn1);
getData(30,fn2);
getData(x+y,fn3);   //at this time x and y is not define thus it is good to call them inside the another functoin so that they can use "calculated " value of x and y

var x;
function fn1(a)
{
    x=a+1;
    console.log(x);
}
var y;
function fn2(a)
{
    y=a+1;
    console.log(y);
}
function fn3(a)
{
    console.log(a);
}