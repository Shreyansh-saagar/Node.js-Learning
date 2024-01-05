/* The code is performing various file operations using the `fs` module in Node.js. in async or non blocking fashion */
const { isUtf8 } = require("buffer");
const fs = require("fs");

// creating file 
fs.writeFile("msg.txt",`Hello world!`,(err)=>{
        console.log(err);
})

// appending into file
fs.appendFile("msg.txt",`\nHow are you doing?`,(err)=>{
    console.log(err);
})
console.log("Done");

// reading file
fs.readFile("msg.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

// Deleting file
fs.unlink("random.txt",(err)=>{
    console.log(err);
})

console.log("all done");