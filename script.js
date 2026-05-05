let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({item, price});
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c.item + " - ₹" + c.price;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function placeOrder() {
  alert("Order placed successfully! ");
  cart = [];
  total = 0;
  updateCart();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}