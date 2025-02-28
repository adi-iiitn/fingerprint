let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from localStorage

// Function to add items to the cart
function addToCart(itemName, itemPrice, itemImage) {
  if (cart[itemName]) {
    cart[itemName].quantity += 1; // If item exists, increase quantity
  } else {
    cart[itemName] = { price: itemPrice, quantity: 1, image: itemImage }; // Add new item to cart
  }

  updateCartCount(); // Update the cart count
  saveCartToLocalStorage(); // Save cart to localStorage
}

// Function to update the cart count displayed on the cart icon
function updateCartCount() {
  let totalItems = 0;
  for (let item in cart) {
    totalItems += cart[item].quantity; // Add the quantity of each item
  }

  // Update the cart count in the DOM
  document.getElementById("cart-count").textContent = totalItems;
}

// Function to save cart data to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to handle search functionality
function searchFood() {
  const searchQuery = document.getElementById("search").value.toLowerCase(); // Get the search input
  const foodItems = document.querySelectorAll('.food-item');

  foodItems.forEach(item => {
    const name = item.getAttribute('data-name').toLowerCase();
    const restaurant = item.getAttribute('data-restaurant').toLowerCase();

    if (name.includes(searchQuery) || restaurant.includes(searchQuery)) {
      item.style.display = 'block'; // Show matching items
    } else {
      item.style.display = 'none'; // Hide non-matching items
    }
  });
}

// Initial display of all food items
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount(); // Update cart count when the page loads
});
