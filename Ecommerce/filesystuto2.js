const fs = require('fs');
fs.mkdir('tuto',(err)=>{
  if(err) console.log(err);
  else {console.log("folder created successfully");
    fs.writeFile('./tuto/test.txt','this is a file in tuto folder',(err)=>{
        if(err) console.log(err);
        else console.log("file created successfully");
    });
}
});
//to delete an empty folder
fs.rmdir('tuto',(err)=>{
    if(err) console.log(err);
    else console.log("folder deleted");
});
//to delete a non empty folder 
fs.unlink('./tuto/test.txt',(err)=>{
  if(err) console.log(err);
  else console.log("file successfully deleted");
});
fs.rmdir('tuto',(err)=>{
    if(err) console.log(err);
    else console.log("folder deleted successfully..;")
}
);
//to delete a folder with multiple files
fs.readdir('./tuto',(err,files)=>{
    if(err) console.log(err);

    else {
        for(let file of files){
            fs.unlink('./tuto/' +file,(err)=>{
             if(err) console.log(err);
             else console.log("files deleted successfully");
            });
        }
    }
})