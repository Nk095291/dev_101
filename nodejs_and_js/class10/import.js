// const ex = require("./export");
// // import * as ex from "./export";
// // ex.yo();
// // ex.yoo();
// ex();
// ex.sayhi();
// console.log(module.exports);
// console.log(exports);
// console.log(ex);
// import { yo } from 'export.js';
// console.log(ex);


module.exports = ()=>{
    console.log("yoooo");
}                                   // before this module.export was equal to exports but as soon as we change it's ref. they are no equal 

console.log(module.exports === exports);