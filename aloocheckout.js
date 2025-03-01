// Load cart data and coupon state from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || {};
let discount = parseFloat(localStorage.getItem('discount')) || 0;
let freeDelivery = localStorage.getItem('freeDelivery') === 'true' || false;
let totalPrice = 0;

// Function to initialize checkout page
function initializeCheckout() {
  updateCartCount();
  updateTotalPrice();
}

// Function to update the cart count
function updateCartCount() {
  let totalItems = 0;
  for (const itemName in cart) {
    totalItems += cart[itemName].quantity;
  }
  document.getElementById('cart-count').textContent = totalItems;
}

// Function to update the total price
function updateTotalPrice() {
  totalPrice = 0;
  for (const itemName in cart) {
    totalPrice += cart[itemName].price * cart[itemName].quantity;
  }

  const deliveryCharge = 20; // Delivery charge is ₹20
  let finalPrice = totalPrice - discount;

  // Display subtotal
  document.getElementById('subtotal-price').textContent = totalPrice.toFixed(2);

  // Display delivery fee
  const deliveryFeeElement = document.getElementById('delivery-fee');
  if (freeDelivery) {
    deliveryFeeElement.textContent = '₹0 (Free Delivery)';
    finalPrice += 0; // Free delivery
  } else {
    deliveryFeeElement.textContent = `₹${deliveryCharge}`;
    finalPrice += deliveryCharge; // Add delivery charge
  }

  // Display total price
  document.getElementById('total-price').textContent = finalPrice.toFixed(2);
}

// Function to place the order
function placeOrder() {
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;

  if (!name || !mobile || !address) {
    alert('Please fill out all fields.');
    return;
  }

  // Prepare cart items as a string
 // const cartItems = Object.keys(cart)
   // .map(itemName => `${itemName} (Qty: ${cart[itemName].quantity})`)
    //.join(', ');

 // Prepare cart items as a string with restaurant names
 const cartItems = Object.keys(cart)
 .map(itemName => `${itemName} (Qty: ${cart[itemName].quantity}, Restaurant: ${cart[itemName].restaurant})`)
 .join(', ');




  // Google Form URL (replace with your actual Google Form URL)
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf9k9sPNwPAzik760VJ12SeToFSQQ2pWLN32wJwgOTUjK8vqA/viewform?usp=pp_url';

  // Prefill Google Form fields
  const prefilledUrl = `${googleFormUrl}&entry.167652935=${encodeURIComponent(name)}&entry.711003979=${encodeURIComponent(mobile)}&entry.1445439165=${encodeURIComponent(address)}&entry.1159606041=${encodeURIComponent(cartItems)}&entry.996163308=${encodeURIComponent(totalPrice.toFixed(2))}`;

  // Redirect to the prefilled Google Form
  window.location.href = prefilledUrl;
}

// Initialize Checkout Page
initializeCheckout();