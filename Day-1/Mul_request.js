/* These lines of code are importing the `http` module, which is a built-in module in Node.js that
allows you to create HTTP servers and make HTTP requests. */
const http = require('http');
const PORT  = 8090;
const HOST = '127.0.0.1';


/* The `const server = http.createServer((req,res)=>{...})` line of code is creating an HTTP server instance
using the `http` module in Node.js. The `createServer` method takes a callback function as an
argument, which will be executed whenever a request is made to the server. */
const server = http.createServer((req,res)=>{

/* The line `res.write("Hello user! ->  ");` is writing the string "Hello user! ->  " to the response
object. This means that when the server receives a request and sends a response back to the client,
the response will start with the message "Hello user! ->  ". */
    res.write("Hello user! ->  ");

/* The code block is handling incoming HTTP requests and sending appropriate responses based on the
requested URL. */
    if(req.url == '/product'){
        res.end("Product page")
    }else if(req.url == '/user'){
        res.end("User page")
    }else{
        res.end("please try again later")
    }
    
    // res.end("All set")

    /* `res.end("all end")` is sending a response to the client with the message "all end". This is the
    default response that will be sent if none of the previous conditions in the if-else statement
    are met.
    but 
    due to this it will throw error coz in if-else-if we are closing res and after closing we can't end it again here */
    // res.end("all end")
})

/* The `server.listen(PORT, HOST, () => { console.log("listening on port 8080"); })` line of code is
starting the HTTP server and making it listen for incoming requests on a specific port and host. */
server.listen(PORT,HOST,()=>{
    console.log("listening on port 8080");
})