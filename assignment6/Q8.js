// Q8 – Retry logic
function submitOrder(){
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      Math.random() < 0.5 ? resolve("Order submitted") : reject("Submit failed");
    }, 800);
  });
}

async function processOrder(){
  for(let i=1;i<=3;i++){
    try{
      await submitOrder();
      console.log("Attempt", i, ": Success");
      return;
    } catch(err){
      console.log("Attempt", i, ": Failed");
    }
  }
  throw new Error("Order could not be processed");
}

(async()=>{
  try{ await processOrder(); }
  catch(err){ console.error(err.message); }
})();
