const fs = require('fs');
const path = require('path');

// reading a file from another folder

const filePath = path.join('txtfile','msg.txt') // gives relative path
console.log(filePath);

const filePathResolved = path.resolve('txtfile','msg.txt') //gives absolute path
console.log(filePathResolved);

// To know the extension of any file using path.extname
console.log(path.extname(filePathResolved));

fs.readFile(filePath,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("\n"+data.toString());
    }
})