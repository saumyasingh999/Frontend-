// Q2 – Task Scheduler
// Microtasks run before macrotasks because Promise callbacks go into the microtask queue,
// which is processed immediately after synchronous code, before the macrotask queue.

console.log("Start");

setTimeout(() => console.log("Timeout (macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise.then (microtask)"));

console.log("Synchronous log");

console.log("End");
