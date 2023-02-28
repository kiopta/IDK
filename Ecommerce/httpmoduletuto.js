const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write('hello, this is your response');
    res.end();
    }
    else {
        res.write('Using an other domain');
        res.end();
    }
})
server.listen('3000');