/* 
Title: File Appending and Printing

Introduction:
In this task, you are required to write a code snippet that handles a POST request. The code should append the request body to a file named "data.txt" and then print the contents of the file to the console. This functionality is particularly useful in scenarios where data needs to be stored and retrieved for further processing, such as logging or data persistence.
 */
const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{

    if(req.method == 'POST'){

        let body=''
        req.on('data',(chunk)=>{
            body += chunk.toString();
            fs.appendFileSync("data.txt",body)
        })
        req.on('end',()=>{
            let info = fs.readFileSync("data.txt",{encoding: 'utf8'})
            console.log("------------------------------");
            console.log(info);
            res.end("Task finished")
        })
    }else{
        console.log("Get or any other request");
        res.end("Welcome to portal")
    }
})

server.listen(8000,()=>{
    console.log("listening on port 8000");
})