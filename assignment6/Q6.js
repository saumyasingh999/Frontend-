// Q6 – Fetch product data
async function loadProducts(){
  try{
    let res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok) throw new Error("Network error");
    let products = await res.json();

    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("-------------------");
    });
  } catch (err){
    console.error("Failed to load products. Please try again.");
  }
}
loadProducts();
