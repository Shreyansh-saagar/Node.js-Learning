const fs = require('fs');
const http = require('http');

const PORT = 8090;
const HOST = '127.0.0.1';

/* The `const server = http.createServer((req,res)=>{...})` code is creating an HTTP server using the
`http` module in Node.js. */
const server = http.createServer((req,res)=>{
    
    if(req.url == '/user'){
        /* `const data = fs.readFileSync('index.html').toString()` is reading the contents of the file
        `index.html` synchronously using the `fs.readFileSync()` method. The `toString()` method is
        then used to convert the contents of the file to a string. The resulting string is stored in
        the `data` variable. */
        const data = fs.readFileSync('index.html').toString()

        /* `res.sendDate(data)` is not a valid method in the Node.js `http` module. It seems like there
        might be a typo or a mistake in the code. */
        res.end(data)
    }else{
        res.end("All ok")
    }
    
})


server.listen(PORT,HOST,()=>{
    console.log("server open at 8090");
})