document.addEventListener("DOMContentLoaded", () =>{
  const productsList = document.getElementById("products-list");

  //const API_KEY = "YOUR_API_KEY"; dont need API_KEY for this it seems

  async function fetchProducts(){
    const url = `https://fakestoreapi.com/products`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }

  function displayProducts(products) {
    productsList.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;

      const productTitle = document.createElement("h2");
      productTitle.textContent = product.title;

      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price}`;

})