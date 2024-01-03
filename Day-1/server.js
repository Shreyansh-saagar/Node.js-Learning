/* This code is creating a basic HTTP server using the Node.js `http` module. */

/* `const http = require("http");` is importing the built-in `http` module in Node.js. This module
allows you to create an HTTP server and handle HTTP requests and responses. */
const http = require("http");

/* The code `const server = http.createServer((req,res)=>{ res.end("Welcome to server 8090") })` is
creating an HTTP server using the `createServer` method provided by the `http` module. */
const server = http.createServer((req,res)=>{
    res.end("Welcome to server 8090")
})

/* `server.listen(8090,()=>{ console.log("Listening on 8090") });` is starting the HTTP server and
telling it to listen on port 8090. */
server.listen(8090,'127.0.0.1',()=>{
    console.log("Listening on 8090")
});

// use 127.0.0.1:8090 in browser to listen on port