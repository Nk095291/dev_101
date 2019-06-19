var ar =[1,234,5,6,7];
let newar = ar.map(function(e){
    return e*2;
})

let newar2 = ar.filter(function(e)
{
    return e%2;
})
console.log(newar);
console.log(newar2);
