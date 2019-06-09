let str = "The quick brown for jumped over the lazy dog";

function maxl(str)
{
    ar = str.split(" ");
    console.log(ar);
    let res = ar.reduce((a,b)=>Math.max(a,b.length),0);
    console.log(res);
}
maxl(str);
