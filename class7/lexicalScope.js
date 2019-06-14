function a(){
    var arr=[];
    let i =0;
    for(  i =0;i<3;i++)
    {
        arr.push(
            function(){
                // let b =i;
                console.log(i);
            }
        )
        arr[0]();   // here because of let i is printing 0, if i remove "let"  then it's value will be assign 
                    // because of closure.
    }

    // console.log(i);
    return arr;
}
var k = a();
for(let j in k)
    {
        k[j](); // here because of closure , it is printing value of last value of i
    }