"use strict";
function outer(){
 console.log(count); // undefined
 var count=5;
 function inner(){
   console.log(count); // undefined
   var count=10;
 }
 inner();
}
outer();
