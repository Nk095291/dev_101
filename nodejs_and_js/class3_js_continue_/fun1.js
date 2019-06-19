let ar=[1,2,3,4,5];
function num(ar)
{
    let newar=[...ar];
    for(let i in newar)
        newar[i]=newar[i]*2;
    return newar;
}
console.log(ar);
console.log(num(ar));
