let ar =[1,2,3,4,5];

function mul2(ar)
{
    let x=1;
    for(let i in ar)
        x*=ar[i];
    return x;
}

function mul1(ar)
{
    return mul2(ar);
}

console.log(ar);
console.log(mul1(ar));
