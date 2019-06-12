let yo ={
    fun:function(){
        console.log(this);

    },
    arfun:[function(){
        console.log(this==global);
        function yoyo(){
            console.log(this==global);
        }
        yoyo();         // function call
    }]
}
console.log(this==global);
function fun2(){
    console.log(this==global);
}
yo.fun();       // method call
fun2();         // function call
yo.arfun[0]();      // method call


/*
**this for 
*1.method = obj;
*2.function = global;
*/