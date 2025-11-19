// Q1: Product Class
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  applyDiscount(percent) {
    this.price -= this.price * (percent/100);
  }
  details() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Shoes", 1500, "Fashion"),
  new Product(3, "Book", 300, "Education")
];

console.log(products.filter(p => p.price > 1000));
