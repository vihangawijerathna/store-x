document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.getElementById("products-list");

  //const API_KEY = "YOUR_API_KEY"; dont need API_KEY for this it seems

  async function fetchProducts() {
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

      const productTitle = document.createElement("h3");
      productTitle.textContent = product.title;

      const productPrice = document.createElement("p");
      productPrice.classList.add("price"); // Add price class to match CSS
      productPrice.textContent = `$${product.price}`;

      // Add "Add to Cart" button
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", () => {
        // Add cart functionality here later
        console.log(`Added ${product.title} to cart`);
      });

      // Append all elements to the product card
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productPrice);
      productCard.appendChild(addButton);

      // Append the product card to the products list
      productsList.appendChild(productCard);
    });
  }

  // Actually fetch and display products when page loads
  async function initializeStore() {
    try {
      const products = await fetchProducts();
      displayProducts(products);
    } catch (error) {
      console.error("Failed to load products:", error);
      productsList.innerHTML =
        "<p>Failed to load products. Please try again later.</p>";
    }
  }

  // Start the app
  initializeStore();
});
