// call arthimatic function and print results on terminal

// import using common js
/*

const arth = require("./arthematic")
const arth2 = require("./arthematic") 

// const value = arth.add(3,4);
const value2 = arth.multiply(5,8);
// console.log(value)
console.log(value2)

*/

// Importing using ES6 -> first u have to rename file extension as mjs and then below syntax will be followed
import * as arth from "./arthematic.mjs"
// or
import {num} from "./arthematic.mjs"

console.log(arth.div(4,2))
console.log(num)