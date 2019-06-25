var ajax = require("./filedownload");

let balance = 100;
let pi=20;
function chargefunction(pi){
    balance=balance-pi;
}
ajax.trackCheckout(pi,()=>{
    chargefunction(pi);
})

console.log(`your final balance is : ${balance}`);