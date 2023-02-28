const fs = require('fs'); 

//create file
fs.writeFile('example.txt',"this is an example",(err)=>{
   if(err)
     console.log(err);
    else {
     console.log("file succefully created");
     fs.readFile('example.txt','utf8',(err,file)=>{
       if(err) console.log(err);
       else console.log(file);
    })
    }
});
fs.rename('example.txt','example2.txt',(err)=>{
 if(err) console.log(err);
 else console.log("file renamed successfully");
});
fs.appendFile('example2.txt','the data I want to add',(err)=>{
 if(err) console.log(err);
 else console.log("data added successfully");
});
//delete a file
fs.unlink('example2.txt',(err)=>{
    if(err) console.log(err);
    else console.log("file deleted successfully");
})