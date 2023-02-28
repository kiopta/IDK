const express = require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world !!');
});
app.get('/example',(req,res)=>{
  res.send('hi again');
});
//get('/example/:name/:age' this is the request
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('I can see your parameters'+" "+ req.params.name + " "+ req.params.age);
});
app.listen(3000);