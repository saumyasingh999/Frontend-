// Q3 – Bug Tracker: Callback to Promise
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.3;
      if (fail) reject("API Failure");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.error("ERROR:", err));
