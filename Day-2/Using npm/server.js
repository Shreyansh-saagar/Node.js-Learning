// Before running this file run -> 1> npm install -> (to install packages) , 2> node server.js -> (to run the file)
const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Welcome to server 8090")
})

server.listen(8090,'127.0.0.1',()=>{
    console.log("Listening on 8090")
});

// use 127.0.0.1:8090 in browser to listen on port
