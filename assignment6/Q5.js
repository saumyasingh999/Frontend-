// Q5 – Callback Hell → async/await

// Callback hell version:
function design(cb){ setTimeout(()=>{ console.log("Design"); cb(); },1000); }
function build(cb){ setTimeout(()=>{ console.log("Build"); cb(); },1000); }
function test(cb){ setTimeout(()=>{ console.log("Test"); cb(); },1000); }
function deploy(cb){ setTimeout(()=>{ console.log("Deploy"); cb(); },1000); }
function celebrate(cb){ setTimeout(()=>{ console.log("Celebrate"); cb(); },1000); }

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => console.log("Done (Callback Hell)"));
      });
    });
  });
});

// Async/await version:
function delayLog(msg){
  return new Promise(res => setTimeout(()=>{ console.log(msg); res(); },1000));
}

async function pipeline(){
  await delayLog("Design");
  await delayLog("Build");
  await delayLog("Test");
  await delayLog("Deploy");
  await delayLog("Celebrate");
  console.log("Done (Async/Await)");
}
pipeline();

// Async/await improves readability by removing nested callbacks and making code linear.
