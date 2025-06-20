const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "images/tshirt.jpeg" },
  { id: 2, name: "Jeans", price: 999, image: "images/jeans.webp" },
  { id: 3, name: "Shoes", price: 1999, image: "images/shoes.jpeg" },
  { id: 4, name: "Watch", price: 1499, image: "images/watch.jpeg" },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
  showToast();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total;
  cartCount.textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function showToast() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}


renderProducts();
