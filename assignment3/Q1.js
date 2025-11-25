"use strict";
// Q1 – Dynamic Data Parser
const apiData=["25","true","false","NaN"," ","100px","3.14",null,undefined];
const valid=[]; const invalid=[];
apiData.forEach(v=>{
  const num=Number(v);
  const bool=Boolean(v);
  const str=String(v);
  console.log(v,"=>",{num,bool,str});
  if(!isNaN(num) && v!==" " && v!=="100px") valid.push(num); else invalid.push(v);
});
console.log("Valid:",valid); console.log("Invalid:",invalid);
