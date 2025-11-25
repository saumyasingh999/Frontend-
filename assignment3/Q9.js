"use strict";
const rawData=['{"user":"Alex","age":25}','{"id":2}','{invalid}','{"user":"Mina","age":"22"}'];
const clean=[];
rawData.forEach((r,i)=>{
 try{
   const obj=JSON.parse(r);
   if(!obj.user||!obj.age) throw "Missing keys";
   obj.age=Number(obj.age);
   if(obj.age<18) throw "Underage";
   clean.push(obj);
 }catch(err){console.error("Line",i+1,":",err);} 
});
console.log("Clean:",clean);
