"use strict";
function demo(a,b){
 // total=10; delete total; // invalid strict
 let total=10; // fixed
 console.log(total,a,b);
}
demo(5,10);
