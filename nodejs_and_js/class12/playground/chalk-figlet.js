const chalk = require("chalk");
const figlet = require("figlet");
let green = chalk.bold.bgBlueBright.inverse;    // bold - style //bgGreen - green background
let red = chalk.red;                //red- font color
let big = figlet.textSync;      // large the text 

console.log(chalk.green("yoooo"));

console.log(red(green(big('hey bade',{font:"Ghost",horizontalLayout:"full",verticalLayout:"full"}))));        // font : ghost add ghost in the text(cool isn't it!!!)

console.log(chalk.hex('#DEADED').underline('Hello, world!'))