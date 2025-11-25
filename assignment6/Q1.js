// Q1 – Async Coffee Maker
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.85 ? resolve("Water boiled") : reject("Boiling failed");
    }, 1000);
  });
}
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.85 ? resolve("Coffee brewed") : reject("Brewing failed");
    }, 1200);
  });
}
function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.85 ? resolve("Poured into cup") : reject("Pouring failed");
    }, 1000);
  });
}

boilWater()
  .then((msg) => { console.log(msg); return brewCoffee(); })
  .then((msg) => { console.log(msg); return pourCoffee(); })
  .then((msg) => { console.log(msg); console.log("Coffee ready for the team!"); })
  .catch(err => console.error("ERROR:", err));
