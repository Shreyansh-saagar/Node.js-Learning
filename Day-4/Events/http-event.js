const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.method =='POST'){
        console.log(req.body);
        // expecting data from POST request or client
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk.toString();
        })

        req.on('end',()=>{
            console.log(body);
            res.end('Data received')
        })
    }else{
        console.log("Function end here");
        res.end("Welcome to event of server");
    }
})

server.listen(8000,()=>{
    console.log("listening on 8000");
})