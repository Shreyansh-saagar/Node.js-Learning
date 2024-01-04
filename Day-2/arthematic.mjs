function sum(x,y){
    return x + y;
}

function multiply(x,y){
    return x * y;
}

// ways to make modules
// 1> using common js
/* 
1. 
module.exports = { add:sum }
2.
exports.multiply = (x,y)=>{
    return x * y;
} 
*/

console.log("Loading Js file wait...")

// 2> ES6 js -> just use export keyword before function

export function div(x,y){
    return x / y;
}

export const num  = 7;