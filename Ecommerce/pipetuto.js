//the pipe takes a readble stream and sending it to a destination 
//its a short hand version of what we did in the past in writing to a file what we read from a file
// to use the pipe we need a source stream and a destination stream
const fs = require('fs');
const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example2.txt');
readStream.pipe(writeStream);