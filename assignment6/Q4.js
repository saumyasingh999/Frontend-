// Q4 – DevOps Delay: Promise.all + race
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.8 ? resolve("Server A done") : reject("A failed"), 2000);
  });
}
function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.8 ? resolve("Server B done") : reject("B failed"), 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.error("ERROR:", err));

Promise.race([serverA(), serverB()])
  .then(res => console.log("Fastest response:", res))
  .catch(err => console.error("ERROR:", err));
