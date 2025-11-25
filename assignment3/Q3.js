"use strict";
const transactions=[{id:1,amount:2000},{id:2,amount:-500},{id:3},null];
const valid=[]; const invalid=[];
transactions.forEach(t=>{
 try{
   if(t===null) throw "Null entry";
   if(!t.id||t.amount===undefined) throw "Missing fields";
   if(t.amount<0) throw "Negative amount";
   valid.push(t);
 }catch(err){ invalid.push({t,err}); }
});
console.log("Valid:",valid);
console.log("Invalid:",invalid);
