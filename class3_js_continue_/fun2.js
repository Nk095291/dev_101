let ar=[1,23,23,5,6,7,8];
function onlyOdd(ar)
{
    let newar=[];
    for(let i in ar)
        if(ar[i]%2==1)
            newar.push(ar[i]);
    return newar;
}
console.log(ar);
console.log(onlyOdd(ar));