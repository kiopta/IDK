const sum=(num1,num2)=>num1+num2;
const multi=(num1,num2)=>num1*num2;
console.log(sum(5,9));
class myClass{
   constructor(){
    console.log("object created");
   }
}
module.exports={sum:sum,multi:multi,myClass:myClass};