var x= 10;
console.log(x);
if(true)
{
    var x=20;
}
console.log(x); // x will change to 20 cause var has function scope while with let this program will give the expected value ie,10
console(a);// give undifine if a is declared as var but in case of let it will give error
var a=10;

const ac = 19;
ac = 10;
//  will give error

