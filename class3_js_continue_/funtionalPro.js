let sum =(a,b)=>a+b;
let minus =(a,b)=>a-b;
let multiply =(a,b)=>a*b;
let divide =(a,b)=>{
    if(b==0)
        return "wrong input";
    return a/b;
};

function calci(a,b,fn)
{
    return fn(a,b);
};

console.log(calci(3,4,divide));
