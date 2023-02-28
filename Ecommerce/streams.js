const fs = require('fs');
const readstream = fs.createReadStream('./example.txt','utf8');
const writestream=fs.createWriteStream('example2.txt');
readstream.on('data',(chunk)=>{
    console.log(chunk);
    writestream.write(chunk);
});
