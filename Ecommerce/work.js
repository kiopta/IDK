const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    //const readStream=fs.createReadStream('./static/index.html');
    //res.writeHead(200,{'content-type':'text/html'});
    const readStream=fs.createReadStream('./static/ex.json');
    res.writeHead(200,{'content-type':'application/json'});
    //res.writeHead(200,{'content-type':'image/png'});
    readStream.pipe(res);
    
}).listen('3000');