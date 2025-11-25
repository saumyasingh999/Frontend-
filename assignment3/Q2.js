"use strict";
const employees=[{name:"Amit",salary:"45000",years:"5"},{name:"Sara",salary:"38000",years:"2"},{name:"Kiran",salary:"52000",years:"7"}];
employees.forEach(e=>{
 try{
   if(!e.name||!e.salary||!e.years) throw "Missing property";
   const salary=Number(e.salary);
   const years=Number(e.years);
   if(isNaN(salary)||isNaN(years)) throw "Invalid conversion";
   const bonus= years>3? salary*0.1: salary*0.05;
   console.log(`${e.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
 }catch(err){console.error("Error:",err,e);}
});
