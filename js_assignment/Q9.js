// Q9: Shopping Cart
class Cart {
  constructor(){ this.items=[]; }
  addItem(name, price, qty){
    this.items.push({name, price, qty});
  }
  getTotal(){
    return this.items.reduce((t,i)=> t + i.price * i.qty, 0);
  }
  applyCoupon(code){
    if(/^(SAVE|DISC)\d+$/.test(code)){
      const percent = parseInt(code.match(/\d+/)[0]);
      return this.getTotal() * (1 - percent/100);
    }
    return this.getTotal();
  }
}

