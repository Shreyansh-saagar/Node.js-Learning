// import fs module
const fs = require('fs');

// reading data using blocking code

console.log('Reading data')

const buffer = fs.readFileSync("data.txt")
console.log(buffer) // it will return data not in actual format directly
// console.log(buffer.toString()) // it will return data in actual format directly by converting data stored in buffer into string

// OR you can do this too to avoid using toString()

const buffer1 = fs.readFileSync("data.txt" , { encoding: "utf8" });
console.log(buffer1)

console.log("Done")