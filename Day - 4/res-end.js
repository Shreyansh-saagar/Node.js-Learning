const http = require('http');

let server = http.createServer((req,res)=>{
    res.write('Hello world! -> ');
    if(req.url == '/first'){
        return res.end('Its first page response')
    }else{
        res.end('Its from the default page')
    }
})

server.listen(8000,()=>{
    console.log("Listening on 8000");
})